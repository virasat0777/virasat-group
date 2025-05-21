import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchBlogsListData = createAsyncThunk(
  "blogsListingPageSlice/fetchBlogsListData",
  async () => {
    const query = {
      populate: [
        "seo",
        "seo.metaImage",
        "seo.schema",
        "seo.metaSocial",
        "seo.metaSocial.image",
        "banner.desktopBanner",
        "banner.mobileBanner",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blog-list-page?${queryString}`;
    const response = await axios.get(endpoint);
    const data = response.data.data;
    return data;
  }
);

const blogsListingPageSlice = createSlice({
  name: "blogsListingPage",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogsListData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBlogsListData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default blogsListingPageSlice.reducer;

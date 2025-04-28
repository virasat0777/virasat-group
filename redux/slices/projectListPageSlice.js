import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchProjectListingPageData = createAsyncThunk(
  "projectListingPageSlice/fetchProjectListingPageData",
  async () => {
    const query = {
      populate: [
        // "seo",
        // "seo.metaImage",
        // "seo.schema",
        // "seo.metaSocial",
        // "seo.metaSocial.image",
        "banner.desktopBanner",
        "banner.mobileBanner",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project-listing?${queryString}`;
    console.log(endpoint, "endpoint");
    const response = await axios.get(endpoint);
    const data = response.data.data;
    return data;
  }
);

const projectListingPageSlice = createSlice({
  name: "projectListingPage",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectListingPageData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectListingPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProjectListingPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default projectListingPageSlice.reducer;

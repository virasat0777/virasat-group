let api = "/api/blog-listings";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchBlogsList = createAsyncThunk(
  "blogsListSlice/fetchBlogsList",
  async () => {
    const query = {
      populate: [
        // "seo",
        // "seo.metaImage",
        // "seo.schema",
        // "seo.metaSocial",
        // "seo.metaSocial.image",
        "thumbnailImage",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}${api}?${queryString}`;
    console.log(endpoint, "blogs end point");
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  }
);

const blogsListSlice = createSlice({
  name: "blogs",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogsList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBlogsList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default blogsListSlice.reducer;

let api = "/api/career";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchCareerData = createAsyncThunk(
  "careerSlice/fetchCareerData",
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
        "listingSection.available_jobs.badges",
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

const careerSlice = createSlice({
  name: "careers",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCareerData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCareerData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default careerSlice.reducer;

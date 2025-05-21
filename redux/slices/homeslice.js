import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchHomeData = createAsyncThunk(
  "homeSlice/fetchHomeData",
  async () => {
    const query = {
      populate: [
        "seo",
        "seo.metaImage",
        "seo.schema",
        "seo.metaSocial",
        "seo.metaSocial.image",
        "bannerTexts",
        "banners.desktopBanner",
        "banners.mobileBanner",
        "overview.leftImage",
        "overview.centerImage",
        "overview.rightImage",
        "testimonial.testimonialItems.image",
        "awards.awardItems.awardImage",
        "counter.bgImage",
        "counter.counterItem",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/home?${queryString}`;
    const response = await axios.get(endpoint);
    const data = response.data.data;
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeSlice.reducer;

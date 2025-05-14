import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchAboutData = createAsyncThunk(
  "aboutSlice/fetchAboutData",
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
        "overview.leftImage",
        "overview.rightImage",
        "management.team.image",
        "management.bgImage",
        "visionMission.visionImage",
        "visionMission.missionImage",
        "loanPartners.partners.image",
        "loanPartners.bgImage",
        "bankCollabs.collabs",
        "bankCollabs",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/about-us?${queryString}`;
    const response = await axios.get(endpoint);
    const data = response.data.data;
    return data;
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default aboutSlice.reducer;

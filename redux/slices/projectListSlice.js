import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchProjectList = createAsyncThunk(
  "projectListSlice/fetchProjectList",
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
        "overview.image",
        "overview.brochure",
        "configuration.primaryImage",
        "configuration.secondaryImage",
        "configuration.areas",
        "amenitySection.amenitySection.image",
        "floorPlan",
        "floorPlan.images",
        "locationAdvantage.details",
        "gallery.images",
        "constructionUpdates.constructionItems.image",
        "featuredSection.primaryImage",
        "featuredSection.secondaryImage",
        "thumbnailImage",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/projects?${queryString}`;
    console.log(endpoint, "end point");
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  }
);

const projectListSlice = createSlice({
  name: "projects",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProjectList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default projectListSlice.reducer;

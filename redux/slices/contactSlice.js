let api = "/api/contact";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchContactData = createAsyncThunk(
  "contactSlice/fetchContactData",
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
        "getInTouch",
        "officeLocation.locationItems",
      ],
    };
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}${api}?${queryString}`;
    console.log(endpoint, "contact end point");
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContactData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default contactSlice.reducer;

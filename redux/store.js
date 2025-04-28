import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeslice";
import projectListSlice from "./slices/projectListSlice";
import newsListSlice from "./slices/newsSlice";
import aboutSlice from "./slices/aboutSlice";
import blogsSlice from "./slices/blogsSlice";
import careerSlice from "./slices/careerSlice";
import contactSlice from "./slices/contactSlice";
import projectListPageSlice from "./slices/projectListPageSlice";
import newsListPageSlice from "./slices/newsListSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    projectList: projectListSlice,
    newsList: newsListSlice,
    about: aboutSlice,
    blogs: blogsSlice,
    career: careerSlice,
    contact: contactSlice,
    projectListPage: projectListPageSlice,
    newsListSlice: newsListPageSlice,
  },
});

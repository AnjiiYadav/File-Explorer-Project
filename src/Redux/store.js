import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./slice"; // Replace with your actual slice file

const store = configureStore({
  reducer: {
    tree: treeReducer,
  },
});

export default store;

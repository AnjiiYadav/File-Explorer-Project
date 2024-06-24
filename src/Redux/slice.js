import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  treeData: [], 
};

const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    updateTreeData: (state, action) => {
      state.treeData = action.payload; 
    },
  },
});

export const { updateTreeData } = treeSlice.actions;
export default treeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfCakes--;
    },
    restoked: (state, action) => {
      state.noOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restoked } = cakeSlice.actions;

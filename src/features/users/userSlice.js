import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userData: [],
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((i) => i.name));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

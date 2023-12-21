import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "global",
  initialState: {
    success: "",
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },

    setClear: (state) => {
      state.success = "";
    },
  },
});
export const { setSuccess, setClear } = globalReducer.actions;
export default globalReducer.reducer;

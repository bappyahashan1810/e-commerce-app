import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("admin-token");
const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: token ? token : null,
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;

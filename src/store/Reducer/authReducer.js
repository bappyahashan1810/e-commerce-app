import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("admin-token");
const verifyToken = () => {
  if (token) {
    const decodedToken = jwtDecode(token);
    if (Date.now() > decodedToken * 1000) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return token;
    }
  } else {
    return null;
  }
};
const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: verifyToken(),
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    logOut: (state) => {
      state.adminToken = null;
      localStorage.removeItem("admin-token");
    },
  },
});

export const { setAdminToken, logOut } = authReducer.actions;
export default authReducer.reducer;

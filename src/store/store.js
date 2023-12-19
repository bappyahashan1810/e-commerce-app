import { configureStore } from "@reduxjs/toolkit";
import authServices from "./Services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "./Reducer/authReducer";

const store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authServices.middleware),
});

setupListeners(store.dispatch);

export default store;

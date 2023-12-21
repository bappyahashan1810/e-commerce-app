import { configureStore } from "@reduxjs/toolkit";
import authServices from "./Services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "./Reducer/authReducer";
import categoryService from "./Services/CategoryService";

const store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authServices.middleware,
      categoryService.middleware
    ),
});

setupListeners(store.dispatch);

export default store;

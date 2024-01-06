import { configureStore } from "@reduxjs/toolkit";
import authServices from "./Services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "./Reducer/authReducer";
import categoryService from "./Services/CategoryService";
import globalReducer from "./Reducer/globalReducer";
import productService from "./Services/ProductService";

const store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [productService.reducerPath]: productService.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authServices.middleware,
      categoryService.middleware,
      productService.middleware
    ),
});

setupListeners(store.dispatch);

export default store;

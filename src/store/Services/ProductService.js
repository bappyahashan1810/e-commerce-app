import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productService = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducer = getState();
      const token = reducer?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createProduct: builder.mutation({
        query: (data) => {
          return {
            url: "create-product",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});
export const { useCreateProductMutation } = productService;
export default productService;

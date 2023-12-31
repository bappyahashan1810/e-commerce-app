import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryService = createApi({
  reducerPath: "category",
  tagTypes: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducer = getState();
      const token = reducer?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
    },
  }),
  endpoints: (builder) => {
    return {
      create: builder.mutation({
        query: (name) => {
          return {
            url: "create-category",
            method: "POST",
            body: name,
          };
        },
        invalidatesTags: ["categories"],
      }),
      updateCategory: builder.mutation({
        query: ({ name, id }) => {
          return {
            url: `update-category/${id}`,
            method: "PUT",
            body: { name },
          };
        },
        invalidatesTags: ["categories"],
      }),
      get: builder.query({
        query: (page) => {
          return {
            url: `categories/${page}`,
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),
      fetchCategory: builder.query({
        query: (id) => {
          return {
            url: `fetch-category/${id}`,
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),

      categoryDelete: builder.mutation({
        query: (id) => {
          return {
            url: `delete-category/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["categories"],
      }),
      allCategories: builder.query({
        query: () => {
          return {
            url: "all-categories",
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),
    };
  },
});

export const {
  useCreateMutation,
  useGetQuery,
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
  useCategoryDeleteMutation,
  useAllCategoriesQuery,
} = categoryService;
export default categoryService;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authServices = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => {
    return {
      authLogin: builder.mutation({
        query: (loginData) => {
          return {
            url: "login",
            method: "POST",
            body: loginData,
          };
        },
      }),
    };
  },
});
export const { useAuthLoginMutation } = authServices;

export default authServices;

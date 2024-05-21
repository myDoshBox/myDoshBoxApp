import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://mydoshbox-be.onrender.com/auth/",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["user"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "individual/login",
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "individual/signup",
        method: "POST",
        body: data,
      }),
    }),
    createOrganization: builder.mutation({
      query: (data) => ({
        url: "organization/signup",
        method: "POST",
        body: data,
      }),
    }),
    createOrganizationGoogle: builder.mutation({
      query: (data) => ({
        url: "auth/org/oauth/google",
        method: "POST",

        //   return{
        //   const data :  response.json()
        // }
      }),
      transformResponse: (response, meta, arg) => console.log(response.data),
    }),
    // createOrganizationGoogle: builder.mutation({
    //   query: (data) => ({
    //     url: "auth/org/oauth/google",
    //     method: "POST",
    //   }),
    //   transformResponse: (response, meta, arg) => {
    //     if (response.status === 200) {
    //       return response.data;
    //     } else {
    //       throw new Error("Failed to create organization");
    //     }
    //   },
    // }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useCreateOrganizationMutation,
  useCreateOrganizationGoogleMutation,
} = apiSlice;

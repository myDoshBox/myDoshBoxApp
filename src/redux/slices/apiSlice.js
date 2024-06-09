// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   // baseUrl: "https://mydoshbox-be.onrender.com/auth/",
//   baseUrl: "http://localhost:5000/auth",
// });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["Users"],
//   endpoints: (builder) => ({
//     createIndUser: builder.mutation({
//       query: (data) => ({
//         url: "individual/signup",
//         method: "POST",
//         body: data,
//       }),
//     }),

//     verifyUser: builder.mutation({
//       // query: ({ token }) => ({
//       query: (token) => ({
//         url: `verify-email`,
//         method: "POST",
//         // params: { token },
//         body: { token },
//       }),
//     }),

//     loginUser: builder.mutation({
//       query: (data) => ({
//         url: "login",
//         method: "POST",
//         body: data,
//       }),
//     }),

//     createOrganization: builder.mutation({
//       query: (data) => ({
//         url: "organization/organizationUserSignup",
//         method: "POST",
//         body: data,
//       }),
//     }),

//     createOrganizationGoogle: builder.mutation({
//       query: (data) => ({
//         url: "organization/oauth",
//         method: "POST",

//         //   return{
//         //   const data :  response.json()
//         // }
//       }),
//       transformResponse: (response, meta, arg) => console.log(response.data),
//     }),
//     // createOrganizationGoogle: builder.mutation({
//     //   query: (data) => ({
//     //     url: "auth/org/oauth/google",
//     //     method: "POST",
//     //   }),
//     //   transformResponse: (response, meta, arg) => {
//     //     if (response.status === 200) {
//     //       return response.data;
//     //     } else {
//     //       throw new Error("Failed to create organization");
//     //     }
//     //   },
//     // }),
//   }),
// });

// export const {
//   useLoginUserMutation,
//   useCreateIndUserMutation,
//   useVerifyUserMutation,
//   useCreateOrganizationMutation,
//   useCreateOrganizationGoogleMutation,
// } = apiSlice;

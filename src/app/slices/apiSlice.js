import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
// 	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
// 	tagTypes: ["User"],
// 	endpoints: (builder) => ({}),
// });

// or

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000" });

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["User"],
	endpoints: (builder) => ({}),
});

import { apiSlice } from "../../apiSlice";

const INDIVIDUALUSERAUTHURL = "/auth";

export const indUserAuthApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		loginIndUser: builder.mutation({
			query: (data) => ({
				url: `${INDIVIDUALUSERAUTHURL}/login`,
				// url: `/auth/login`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useLoginIndUserMutation } = indUserAuthApiSlice;
console.log(indUserAuthApiSlice);

import { apiSlice } from "../../apiSlice";

const INDIVIDUALUSERAUTHURL = "/auth";

export const indUserAuthApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		loginIndUser: builder.mutation({
			query: (data) => ({
				url: `${INDIVIDUALUSERAUTHURL}/register`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useLoginIndUserMutation } = indUserAuthApiSlice;

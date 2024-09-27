import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://mydoshbox-be.onrender.com/transactions/",
});

export const escrowProductsAPISlice = createApi({
  reducerPath: "escrowProductsAPI",
  baseQuery,
  tagTypes: ["Escrow Products"],
  endpoints: (builder) => ({
    initiateEscrowProductTransaction: builder.mutation({
      query: (data) => ({
        url: `initiate-escrow-product-transaction`,
        method: "POST",
        body: data,
      }),
    }),

    verifyEscrowProductTransactionPayment: builder.mutation({
      query: (reference) => ({
        url: `verify-escrow-product-transaction-payment`,
        method: "PUT",
        body: { reference },
      }),
    }),
  }),
});

export const {
  useInitiateEscrowProductTransactionMutation,
  useVerifyEscrowProductTransactionPaymentMutation,
} = escrowProductsAPISlice;

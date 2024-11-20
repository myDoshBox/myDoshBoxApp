import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://mydoshbox-be.onrender.com/transactions/",
  baseUrl: "http://localhost:9000/transactions/",
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

    fetchSingleTransactions: builder.query({
      query: (transactionId) => ({
        url: `get-single-escrow-product-transaction/${transactionId}`, // Assuming your endpoint is /transactions/:buyerEmail
        method: "GET",
      }),
    }),

    fetchAllTransactions: builder.query({
      query: (buyerEmail) => ({
        url: `get-all-escrow-product-transaction/${buyerEmail}`, // Assuming your endpoint is /transactions/:buyerEmail
        method: "GET",
      }),
    }),

    confirmEscrowProduct: builder.mutation({
      // query: ({ token }) => ({
      query: (transaction_id) => ({
        url: `seller-fill-out-shipping-details`,
        method: "POST",
        // params: { token },
        body: { transaction_id },
      }),
    }),

    fetchAllShippingDetails: builder.query({
      query: ({ buyerEmail, vendorEmail }) => {
        // Check if buyerEmail or sellerEmail is provided and construct the query accordingly
        const email = buyerEmail ? buyerEmail : vendorEmail;

        return {
          url: `get-all-escrow-product-transaction/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useInitiateEscrowProductTransactionMutation,
  useVerifyEscrowProductTransactionPaymentMutation,
  useFetchAllTransactionsQuery,
  useFetchSingleTransactionsQuery,
  useConfirmEscrowProductMutation,
  useFetchAllShippingDetailsQuery,
} = escrowProductsAPISlice;

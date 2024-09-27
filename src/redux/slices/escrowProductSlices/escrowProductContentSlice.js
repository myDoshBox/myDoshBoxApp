import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   userInfo: localStorage.getItem("productInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null,

  escrowProductInfo: {},
};

const escrowProductInfoSlice = createSlice({
  name: "escrowProduct",
  initialState,
  reducers: {
    setEscrowProduct: (state, action) => {
      state.escrowProductInfo = action.payload;
    },
  },
});

export const { setEscrowProduct } = escrowProductInfoSlice.actions;

export default escrowProductInfoSlice.reducer;

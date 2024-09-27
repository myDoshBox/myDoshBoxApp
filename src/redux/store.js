import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersAuthReducer from "./slices/userSlices/allUsersAuthSlice";
import escrowProductReducer from "./slices/escrowProductSlices/escrowProductContentSlice";
// import { usersAPISlice } from "./slices/userSlices/usersAPISlice";
import { usersAPISlice } from "./slices/userSlices/allUsersAPISlice";
import { escrowProductsAPISlice } from "./slices/escrowProductSlices/escrowProductsAPISlice";

const reducers = combineReducers({
  // users
  usersauth: usersAuthReducer,
  [usersAPISlice.reducerPath]: usersAPISlice.reducer,

  // products
  escrowProductInfo: escrowProductReducer,
  [escrowProductsAPISlice.reducerPath]: escrowProductsAPISlice.reducer,
});

export const store = configureStore({
  // reducer: {
  //   // users
  //   usersauth: usersAuthReducer,
  //   // users: usersAPISlice.reducer,
  //   [usersAPISlice.reducerPath]: usersAPISlice.reducer,

  //   // products
  //   // escrowProducts: escrowProductsAPISlice.reducer,
  //   [escrowProductsAPISlice.reducerPath]: escrowProductsAPISlice.reducer,
  // },
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersAPISlice.middleware)
      .concat(escrowProductsAPISlice.middleware),

  devTools: true,
});

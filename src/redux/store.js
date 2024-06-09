import { configureStore } from "@reduxjs/toolkit";
import usersAuthReducer from "./slices/userSlices/allUsersAuthSlice";
// import { usersAPISlice } from "./slices/userSlices/usersAPISlice";
import { usersAPISlice } from "./slices/userSlices/allUsersAPISlice";

export const store = configureStore({
  reducer: {
    usersauth: usersAuthReducer,
    users: usersAPISlice.reducer,
    [usersAPISlice.reducerPath]: usersAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPISlice.middleware),
  devTools: true,
});

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    addUser: (state, { payload }) => {
      return { ...state, isLoggedIn: true, user: payload };
    },

    // New action for creating a user
    createUser: (state, { payload }) => {
      // Add logic to handle creating a new user in the state
      return { ...state, isLoggedIn: true, user: payload };
    },
    clearUser: (state) => {
      // Add logic to clear user-related data when logging out
      return { ...state, isLoggedIn: false, user: null };
    },
  },
});

export const { addUser, createUser, clearUser } = userSlice.actions;
export default userSlice;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userInfo: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       localStorage.setItem("userInfo", JSON.stringify(action.payload));
//     },
//     logout: (state, action) => {
//       state.userInfo = null;
//       localStorage.removeItem("userInfo");
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;

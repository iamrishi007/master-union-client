import { configureStore, createSlice } from "@reduxjs/toolkit";

// Simple auth slice for testing
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { role: "Admin", name: "Test User" }, // dummy user
    isLoggedIn: true,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

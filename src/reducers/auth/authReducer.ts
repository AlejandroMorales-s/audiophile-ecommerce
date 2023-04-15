import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  createUser,
  loginWithEmail,
  authenticateSession,
  logout,
} from "./authAsyncThunks";
import { InitialState } from "./interfaces";

//* Initial state
const initialState: InitialState = {
  user: null,
  isLoading: false,
  isLogged: false,
};

const options = {
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    //* Create user
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.user = payload;
      state.isLogged = true;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });
    //* Login with email and password
    builder.addCase(loginWithEmail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginWithEmail.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.user = payload;
      state.isLogged = true;
    });
    builder.addCase(loginWithEmail.rejected, (state, action) => {
      state.isLoading = false;
    });
    //* Authenticate session
    builder.addCase(authenticateSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authenticateSession.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.user = payload;
      state.isLogged = true;
    });
    builder.addCase(authenticateSession.rejected, (state) => {
      state.isLoading = false;
    });
    //* Logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.isLogged = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
  },
};

export const authSlice = createSlice(options);

//* Selectors
export const selectUserData = (state: { auth: InitialState }) =>
  state.auth.user;
export const selectLoadingUser = (state: { auth: InitialState }) =>
  state.auth.isLoading;
export const selectLoggedUser = (state: { auth: InitialState }) =>
  state.auth.isLogged;

export default authSlice.reducer;

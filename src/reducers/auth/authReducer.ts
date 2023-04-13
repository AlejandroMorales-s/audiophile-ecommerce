import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { InitialState, User, UserForm } from "./interfaces";

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
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {},
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

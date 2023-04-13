import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { InitialState, User, UserForm } from "./interfaces";
import instance from "../../axios";

//* Create user
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (user: UserForm, thunkAPI) => {
    try {
      const { data }: { data: User } = await instance.post(
        "/auth/register",
        user
      );

      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

//* Login with email and password
export const loginWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async (user: UserForm, thunkAPI) => {
    try {
      const { data }: { data: User } = await instance.post("/auth/login", user);

      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

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

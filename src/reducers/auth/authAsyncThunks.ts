import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorType, User, UserForm } from "./interfaces";
import instance from "../../axios";
import { setNotificationInfo } from "../notification/notificationReducer";

//* Create user
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (user: UserForm, thunkAPI) => {
    try {
      const { data }: { data: User } = await instance.post(
        "/auth/register",
        user,
        {
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      const { response } = error as ErrorType;

      thunkAPI.dispatch(
        setNotificationInfo({
          message: response.data.message,
          type: "error",
          title: "Something went wrong",
        })
      );
      throw new Error(response.data.message);
    }
  }
);

//* Login with email and password
export const loginWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async (user: UserForm, thunkAPI) => {
    try {
      const { data }: { data: User } = await instance.post(
        "/auth/login",
        user,
        { withCredentials: true }
      );

      return data;
    } catch (error) {
      const { response } = error as ErrorType;

      thunkAPI.dispatch(
        setNotificationInfo({
          message: response.data.message,
          type: "error",
          title: "Something went wrong",
        })
      );
      throw new Error(response.data.message);
    }
  }
);

//* Authenticate session
export const authenticateSession = createAsyncThunk(
  "auth/authenticateSession",
  async () => {
    try {
      const { data }: { data: User } = await instance.get(
        "/auth/authenticate",
        { withCredentials: true }
      );

      return data;
    } catch (error) {
      const { response } = error as ErrorType;
      throw new Error(response.data.message);
    }
  }
);

//* Logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data }: { data: User } = await instance.get("/auth/logout", {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    const { response } = error as ErrorType;
    thunkAPI.dispatch(
      setNotificationInfo({
        message: response.data.message,
        type: "error",
        title: "Something went wrong",
      })
    );
    throw new Error(response.data.message);
  }
});

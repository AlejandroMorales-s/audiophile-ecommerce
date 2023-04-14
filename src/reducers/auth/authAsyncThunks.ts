import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserForm } from "./interfaces";
import instance from "../../axios";
import { setNotificationInfo } from "../notification/notificationReducer";

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
      const { response } = error as { response: { data: { message: string } } };

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
      const { data }: { data: User } = await instance.post("/auth/login", user);

      return data;
    } catch (error) {
      const { response } = error as { response: { data: { message: string } } };

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

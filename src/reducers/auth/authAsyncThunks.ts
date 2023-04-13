import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserForm } from "./interfaces";
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
      console.log(error.response.data.message);

      throw new Error(error.response.data.message);
    }
  }
);

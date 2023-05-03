import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";
import { ErrorType } from "../auth/interfaces";
import { setNotificationInfo } from "../notification/notificationReducer";
import { setUserInfo } from "../auth/authReducer";
import {
  UpdateUserEmailTypes,
  UpdateUserFullNameTypes,
  UpdateUserPasswordTypes,
} from "./interfaces";

//* Update password
export const updateUserPassword = createAsyncThunk(
  "updateUser/updatePassword",
  async (body: UpdateUserPasswordTypes, thunkAPI) => {
    try {
      const { data } = await instance.put("/user/update-password", body, {
        withCredentials: true,
      });

      thunkAPI.dispatch(
        setNotificationInfo({
          message: "Password updated successfully",
          type: "success",
          title: "Password updated",
        })
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

//* Update full name
export const updateUserFullName = createAsyncThunk(
  "updateUser/updateUserFullName",
  async (body: UpdateUserFullNameTypes, thunkAPI) => {
    try {
      const { data } = await instance.put("/user/update-fullname", body, {
        withCredentials: true,
      });

      thunkAPI.dispatch(setUserInfo(data[0]));

      thunkAPI.dispatch(
        setNotificationInfo({
          message: "Name updated successfully",
          type: "success",
          title: "Name updated",
        })
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

//* Update email
export const updateUserEmail = createAsyncThunk(
  "updateUser/updateEmail",
  async (body: UpdateUserEmailTypes, thunkAPI) => {
    try {
      const { data } = await instance.put("/user/update-email", body, {
        withCredentials: true,
      });

      thunkAPI.dispatch(setUserInfo(data[0]));

      thunkAPI.dispatch(
        setNotificationInfo({
          message: "Email updated successfully",
          type: "success",
          title: "Email updated",
        })
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

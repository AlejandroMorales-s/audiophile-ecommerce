import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";
import { Order, OrderFromDb } from "./interfaces";
import { ErrorType } from "../auth/interfaces";
import { setNotificationInfo } from "../notification/notificationReducer";

//* Get order amount
export const getOrderAmount = createAsyncThunk(
  "orders/getOrderAmount",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/orders/order-amount", {
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
  }
);

//* Save order in db
export const saveOrder = createAsyncThunk(
  "orders/saveOrder",
  async ({ orderData }: { orderData: Order }, thunkAPI) => {
    try {
      const { data } = await instance.post("orders/create-order", orderData, {
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
  }
);

//* Get user orders
export const getUserOrders = createAsyncThunk(
  "orders/getUserOrders",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/orders", { withCredentials: true });

      return data.reverse() as OrderFromDb[];
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

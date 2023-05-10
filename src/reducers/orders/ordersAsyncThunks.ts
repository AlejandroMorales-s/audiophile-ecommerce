import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";
import { Order } from "./interfaces";

//* Get order amount
export const getOrderAmount = createAsyncThunk(
  "orders/getOrderAmount",
  async () => {
    try {
      const { data } = await instance.get("/orders/order-amount", {
        withCredentials: true,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//* Save order in db
export const saveOrder = createAsyncThunk(
  "orders/saveOrder",
  async ({ orderData }: { orderData: Order }) => {
    try {
      const { data } = await instance.post("orders/create-order", orderData, {
        withCredentials: true,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
//* Axios
import instance from "../../axios";
//* Interfaces
import { ShoppingCartProduct } from "./interfaces";
import { ErrorType } from "../auth/interfaces";
//* Reducers
import { setNotificationInfo } from "../notification/notificationReducer";

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (_, thunkAPI) => {
    try {
      const { data }: { data: ShoppingCartProduct[] } = await instance.get(
        "/shopping-cart",
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

export const deleteShoppingCart = createAsyncThunk(
  "shoppingCart/deleteShoppingCart",
  async (_, thunkAPI) => {
    try {
      const { data }: { data: [] } = await instance.delete("/shopping-cart", {
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

export const addToShoppingCart = createAsyncThunk(
  "shoppingCart/addToShoppingCart",
  async (
    { productId, quantity }: { productId: number; quantity: number },
    thunkAPI
  ) => {
    try {
      const { data }: { data: ShoppingCartProduct[] } = await instance.post(
        "/shopping-cart",
        { productId, quantity },
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

export const removeFromShoppingCart = createAsyncThunk(
  "shoppingCart/removeFromShoppingCart",
  async ({ productId }: { productId: number }, thunkAPI) => {
    try {
      const { data }: { data: ShoppingCartProduct[] } = await instance.delete(
        `/shopping-cart/${productId}`,
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

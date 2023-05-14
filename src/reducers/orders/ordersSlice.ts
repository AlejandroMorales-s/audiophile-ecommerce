import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";
import { getOrderAmount, getUserOrders } from "./ordersAsyncThunks";

const initialState: InitialState = {
  orders: null,
  isLoading: false,
  orderPricing: null,
};

const options = {
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    //* Get order amount
    builder.addCase(getOrderAmount.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getOrderAmount.fulfilled, (state, action) => {
        const pricing = action.payload;
        state.isLoading = false;
        state.orderPricing = pricing;
      }),
      builder.addCase(getOrderAmount.rejected, (state) => {
        state.isLoading = false;
      });
    //* Get user orders
    builder.addCase(getUserOrders.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getUserOrders.fulfilled, (state, action) => {
        const orders = action.payload;

        state.isLoading = false;
        state.orders = orders;
      }),
      builder.addCase(getUserOrders.rejected, (state) => {
        state.isLoading = false;
      });
  },
};

const ordersSlice = createSlice(options);

//* Selectors
export const selectOrderPricing = (state: { orders: InitialState }) =>
  state.orders.orderPricing;
export const selectOrders = (state: { orders: InitialState }) =>
  state.orders.orders;

export default ordersSlice.reducer;

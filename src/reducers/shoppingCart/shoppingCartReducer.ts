import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";
import {
  addToShoppingCart,
  deleteShoppingCart,
  getShoppingCart,
  removeFromShoppingCart,
} from "./shoppingCartAsyncThunks";

//* Initial State
const initialState: InitialState = {
  isLoading: false,
  products: null,
};

//* Options
const options = {
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    //* Get shopping cart
    builder.addCase(getShoppingCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(getShoppingCart.rejected, (state) => {
      state.isLoading = false;
    });
    //* Delete shopping cart
    builder.addCase(deleteShoppingCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteShoppingCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(deleteShoppingCart.rejected, (state) => {
      state.isLoading = false;
    });
    //* Add to shopping cart
    builder.addCase(addToShoppingCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToShoppingCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(addToShoppingCart.rejected, (state) => {
      state.isLoading = false;
    });
    //* Remove from shopping cart
    builder.addCase(removeFromShoppingCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeFromShoppingCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(removeFromShoppingCart.rejected, (state) => {
      state.isLoading = false;
    });
  },
};

const shoppingCartSlice = createSlice(options);

//* Selectors
export const selectShoppingCartLoading = (state: {
  shoppingCart: InitialState;
}) => state.shoppingCart.isLoading;

export const selectShoppingCartProducts = (state: {
  shoppingCart: InitialState;
}) => state.shoppingCart.products;

//* Exporting reducer
export default shoppingCartSlice.reducer;

import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

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
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {},
};

const shoppingCartSlice = createSlice(options);

//* Selectors
export const selectShoppingCartLoading = (state: {
  shoppingCart: InitialState;
}) => state.shoppingCart.isLoading;

//* Exporting reducer
export default shoppingCartSlice.reducer;

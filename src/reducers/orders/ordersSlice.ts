import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState: InitialState = {
  orders: null,
  isLoading: false,
};

const options = {
  name: "",
  initialState,
  reducers: {},
  extraReducers: () => {},
};

const ordersSlice = createSlice(options);

export default ordersSlice.reducer;

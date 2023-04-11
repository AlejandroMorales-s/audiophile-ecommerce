import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers

export const store = configureStore({
  reducer: {
    // * Reducers
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

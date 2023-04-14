import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import authReducer from "./reducers/auth/authReducer";
import notificationReducer from "./reducers/notification/notificationReducer";

export const store = configureStore({
  reducer: {
    // * Reducers
    auth: authReducer,
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

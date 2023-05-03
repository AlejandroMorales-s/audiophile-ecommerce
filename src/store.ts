import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import authReducer from "./reducers/auth/authReducer";
import notificationReducer from "./reducers/notification/notificationReducer";
import shoppingCartReducer from "./reducers/shoppingCart/shoppingCartReducer";
import updateUserReducer from "./reducers/updateUser/updateUserReducer";

export const store = configureStore({
  reducer: {
    // * Reducers
    auth: authReducer,
    notification: notificationReducer,
    shoppingCart: shoppingCartReducer,
    updateUser: updateUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

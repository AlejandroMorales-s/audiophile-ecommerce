import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, NotificationData } from "./interfaces";

//* Creating store
const initialState: InitialState = {
  isActive: false,
  closingNotification: false,
  data: {
    title: "",
    message: "",
    type: "success",
  },
};

const options = {
  name: "notification",
  initialState,
  reducers: {
    resetNotification: (state: InitialState) => {
      state.isActive = false;
      state.closingNotification = false;
      state.data = initialState.data;
    },
    setNotificationInfo: (
      state: InitialState,
      action: PayloadAction<NotificationData>
    ) => {
      state.isActive = true;
      state.data = action.payload;
    },
    setClosingNotification: (state: InitialState) => {
      state.closingNotification = true;
    },
  },
};

const notificationSlice = createSlice(options);

//* Reducers
export const {
  resetNotification,
  setNotificationInfo,
  setClosingNotification,
} = notificationSlice.actions;

//* Selectors
export const selectNotificationData = (state: { notification: InitialState }) =>
  state.notification.data;
export const selectNotificationStatus = (state: {
  notification: InitialState;
}) => state.notification.isActive;
export const selectNotificationClosing = (state: {
  notification: InitialState;
}) => state.notification.closingNotification;

export default notificationSlice.reducer;

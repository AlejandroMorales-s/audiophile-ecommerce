import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  updateUserPassword,
  updateUserFullName,
  updateUserEmail,
} from "./updateUserAsyncThunks";

//* Initial state
interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: false,
};

//* Slice options
const options = {
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateUserPassword.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(updateUserPassword.rejected, (state) => {
        state.isLoading = false;
      });
    builder.addCase(updateUserFullName.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateUserFullName.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(updateUserFullName.rejected, (state) => {
        state.isLoading = false;
      });
    builder.addCase(updateUserEmail.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateUserEmail.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(updateUserEmail.rejected, (state) => {
        state.isLoading = false;
      });
  },
};

//* Creating slice
const updateUserSlice = createSlice(options);

//* Selectors
export const selectLoadingUserUpload = (state: { updateUser: InitialState }) =>
  state.updateUser.isLoading;

//* Exporting
export default updateUserSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    modalSlice,
  },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

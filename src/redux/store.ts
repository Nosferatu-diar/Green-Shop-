import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import shopSlice from "./shopSlice";
export const store = configureStore({
  reducer: {
    modalSlice,
    shopSlice,
  },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

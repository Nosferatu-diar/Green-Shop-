import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisibilty: boolean;
  orderModalVisibilty: boolean;
}

const initialState: InitialStateType = {
  modalAuthorizationVisibilty: false,
  orderModalVisibilty: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationModalVisibilty(state) {
      state.modalAuthorizationVisibilty = !state.modalAuthorizationVisibilty;
    },
    setOrderModalVisibilty(state) {
      state.orderModalVisibilty = !state.orderModalVisibilty;
    },
  },
});

export const { setModalAuthorizationModalVisibilty, setOrderModalVisibilty } =
  modalSlice.actions;
export default modalSlice.reducer;

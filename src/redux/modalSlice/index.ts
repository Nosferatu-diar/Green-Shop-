import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisibilty: boolean;
}

const initialState: InitialStateType = {
  modalAuthorizationVisibilty: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationModalVisibilty(state) {
      state.modalAuthorizationVisibilty = !state.modalAuthorizationVisibilty;
    },
  },
});

export const { setModalAuthorizationModalVisibilty } = modalSlice.actions;
export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisibilty: boolean;
  orderModalVisibilty: boolean;
  trackModalVisiblty: boolean;
}

const initialState: InitialStateType = {
  modalAuthorizationVisibilty: false,
  orderModalVisibilty: false,
  trackModalVisiblty: false,
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
    setTrackModalVisiblty(state) {
      state.trackModalVisiblty = !state.trackModalVisiblty;
    },
  },
});

export const {
  setModalAuthorizationModalVisibilty,
  setOrderModalVisibilty,
  setTrackModalVisiblty,
} = modalSlice.actions;
export default modalSlice.reducer;

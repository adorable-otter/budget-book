import { createSlice } from '@reduxjs/toolkit';

const initialState = { isRegisterModalOpen: false };

const RegisterModalSlice = createSlice({
  name: 'isRegisterModalOpen',
  initialState: initialState,
  reducers: {
    openRegisterModal: (state) => {
      state.isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
    },
  },
});

export const { openRegisterModal, closeRegisterModal } = RegisterModalSlice.actions;

export default RegisterModalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = { isRegisterModalOpen: false, contentType: '' };

const RegisterModalSlice = createSlice({
  name: 'registerModal',
  initialState: initialState,
  reducers: {
    openRegisterModal: (state, action) => {
      state.isRegisterModalOpen = true;
      state.contentType = action.payload;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
      state.contentType = '';
    },
  },
});

export const { openRegisterModal, closeRegisterModal } = RegisterModalSlice.actions;

export default RegisterModalSlice.reducer;

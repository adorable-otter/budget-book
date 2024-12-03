import { createSlice } from '@reduxjs/toolkit';

const initialState = { authUser: null };

const AuthUserSlice = createSlice({
  name: 'authUser',
  initialState: initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    clearAuthUser: (state) => {
      state.authUser = null;
    },
  },
});

export const { setAuthUser, clearAuthUser } = AuthUserSlice.actions;

export default AuthUserSlice.reducer;

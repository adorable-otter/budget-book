import { configureStore } from '@reduxjs/toolkit';
import RegisterModalSlice from './slices/RegisterModalSlice';
// import { toast } from 'sonner';

const errorMiddleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    // toast.error(error.message);
  }
};

const store = configureStore({
  reducer: {
    isRegisterModalOpen: RegisterModalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});
export default store;

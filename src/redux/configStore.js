import { configureStore } from '@reduxjs/toolkit';
import RegisterModalSlice from './slices/RegisterModalSlice';
import ExpendituresSlice from './slices/ExpendituresSlice';
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
    expenditures: ExpendituresSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});
export default store;

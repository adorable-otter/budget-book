import { configureStore } from '@reduxjs/toolkit';
import RegisterModalSlice from './slices/RegisterModalSlice';
import SelectedExpenditureSlice from './slices/SelectedExpenditureSlice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import AuthUserSlice from './slices/AuthUserSlice';
// import { toast } from 'sonner';

const errorMiddleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    // toast.error(error.message);
  }
};

const persistConfig = {
  key: 'authUser',
  storage,
};

const persistedAuthUserReducer = persistReducer(persistConfig, AuthUserSlice);

const store = configureStore({
  reducer: {
    authUser: persistedAuthUserReducer,
    isRegisterModalOpen: RegisterModalSlice,
    selectedExpenditure: SelectedExpenditureSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(errorMiddleware),
});
export const persistor = persistStore(store);
export default store;

import { configureStore } from '@reduxjs/toolkit';
import RegisterModalReducer from './slices/RegisterModalSlice';
import SelectedExpenditureReducer from './slices/SelectedExpenditureSlice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import AuthUserSlice from './slices/AuthUserSlice';
import SelectedYearMonthReducer from './slices/SelectedYearMonthSlice';
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
    registerModal: RegisterModalReducer,
    selectedExpenditure: SelectedExpenditureReducer,
    selectedYearMonth: SelectedYearMonthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(errorMiddleware),
});
export const persistor = persistStore(store);
export default store;

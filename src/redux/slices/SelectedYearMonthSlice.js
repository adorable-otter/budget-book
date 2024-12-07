import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  selectedYearMonth: dayjs(),
};

const SelectedYearMonthSlice = createSlice({
  name: 'selectedYearMonth',
  initialState,
  reducers: {
    selectYearMonth: (state, action) => {
      const newYearMonth = action.payload;
      state.selectedYearMonth = newYearMonth;
    },
    move: (state, action) => {
      const { amount, target } = action.payload;
      state.selectedYearMonth = state.selectedYearMonth.add(amount, target);
    },
  },
});

export const { selectYearMonth, move } = SelectedYearMonthSlice.actions;

export default SelectedYearMonthSlice.reducer;

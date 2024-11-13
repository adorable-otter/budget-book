import { createSlice } from '@reduxjs/toolkit';
import { initialFormState } from '../../constants/form';

const SelectedExpenditureSlice = createSlice({
  name: 'selectedExpenditure',
  initialState: { selectedExpenditure: initialFormState },
  reducers: {
    selectExpenditure: (state, action) => {
      const newExpenditure = action.payload;
      state.selectedExpenditure = newExpenditure;
    },
    unSelectExpenditure: (state) => {
      state.selectedExpenditure = initialFormState;
    },
  },
});

export const { selectExpenditure, unSelectExpenditure } = SelectedExpenditureSlice.actions;

export default SelectedExpenditureSlice.reducer;

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
    unselectExpenditure: (state) => {
      state.selectedExpenditure = initialFormState;
    },
  },
});

export const { selectExpenditure, unselectExpenditure } = SelectedExpenditureSlice.actions;

export default SelectedExpenditureSlice.reducer;

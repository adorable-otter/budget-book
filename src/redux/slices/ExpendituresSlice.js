import { createSlice } from '@reduxjs/toolkit';

const initialState = { expenditures: [] };

const ExpendituresSlice = createSlice({
  name: 'expenditures',
  initialState: initialState,
  reducers: {
    addExpenditure: (state, action) => {
      const newExpenditure = action.payload;
      state.expenditures.push(newExpenditure);
    },
  },
});

export const { addExpenditure } = ExpendituresSlice.actions;

export default ExpendituresSlice.reducer;

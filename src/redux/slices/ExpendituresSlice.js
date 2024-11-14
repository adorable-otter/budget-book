import { createSlice } from '@reduxjs/toolkit';

const initialState = { expenditures: [] };

const ExpendituresSlice = createSlice({
  name: 'expenditures',
  initialState: initialState,
  reducers: {
    addExpenditure: (state, action) => {
      const newExpenditure = { ...action.payload, id: new Date().getTime() };
      state.expenditures.push(newExpenditure);
    },
    updateExpenditure: (state, action) => {
      const toUpdate = action.payload;
      state.expenditures = state.expenditures.map((expenditure) => {
        if (expenditure.id === toUpdate.id) return toUpdate;
        return expenditure;
      });
    },
    deleteExpenditure: (state, action) => {
      const toDelete = action.payload;
      state.expenditures = state.expenditures.filter((expenditure) => {
        return expenditure.id !== toDelete.id;
      });
    },
  },
});

export const { addExpenditure, updateExpenditure, deleteExpenditure } = ExpendituresSlice.actions;

export default ExpendituresSlice.reducer;

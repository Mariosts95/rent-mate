import { configureStore } from '@reduxjs/toolkit';

import expensesReducer from './slices/expensesSlice';
import incomesReducer from './slices/incomesSlice';

export const store = configureStore({
  reducer: {
    incomes: incomesReducer,
    expenses: expensesReducer,
  },
});

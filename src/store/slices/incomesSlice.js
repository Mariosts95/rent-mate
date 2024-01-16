import { createSlice } from '@reduxjs/toolkit';

import { randomId } from '../../utils/general';

const initialState = [];

const incomesSlice = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload, id: randomId(), value: +action.payload.value });
    },
    remove: (state, action) => state.filter((row) => row.id !== action.payload),
  },
});

export const { add, remove } = incomesSlice.actions;

export default incomesSlice.reducer;

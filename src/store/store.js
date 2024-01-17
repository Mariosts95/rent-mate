import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import expensesReducer from './slices/expensesSlice';
import incomesReducer from './slices/incomesSlice';

// We persist under LocalStorage
const persistConfig = {
  key: 'root',
  storage,
};

// We combine multiple reducers
const rootReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

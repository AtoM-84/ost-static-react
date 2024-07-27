import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../features/uiSlice/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});

export default store;

// J'utilise 2 hooks natifs du store' `RootState` et `AppDispatch` qui seront typés dans le fichier redux.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import modalSlice from "@/store/modalSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

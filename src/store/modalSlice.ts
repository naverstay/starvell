// store/userSlice.ts
import {createSlice} from '@reduxjs/toolkit';

interface FilterState {
  isOpen: boolean;
}

const initialState: FilterState = {
  isOpen: false
};

const filterSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalOpen(state, {payload}) {
      state.isOpen = payload;
    },
  },
});

export const {setModalOpen} = filterSlice.actions;
export default filterSlice.reducer;

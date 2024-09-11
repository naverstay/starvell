// store/userSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FilterState {
  search: string;
  flyDelivery: boolean;
  onlyOnline: boolean;
  tags: string[];
}

const initialState: FilterState = {
  search: '',
  tags: [],
  onlyOnline: false,
  flyDelivery: false
};

const filterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOnlyOnline(state, {payload}) {
      state.onlyOnline = payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFlyDelivery(state, {payload}) {
      state.flyDelivery = payload;
    },
    setTags(state, {payload}) {
      state.tags = payload;
    },
  },
});

export const {setSearch, setFlyDelivery, setOnlyOnline, setTags} = filterSlice.actions;
export default filterSlice.reducer;

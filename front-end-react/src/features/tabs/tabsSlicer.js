import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    value: null,
  },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;
export const selectTab = (state) => state.tab.value;

export default tabSlice.reducer;

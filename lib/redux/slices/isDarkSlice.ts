import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const isDarkSlice = createSlice({
  initialState,
  name: 'isDark',
  reducers: {
    setIsDark: (_, { payload }: { payload: boolean }) => payload,
  },
});

export default isDarkSlice.reducer;

export const { setIsDark } = isDarkSlice.actions;

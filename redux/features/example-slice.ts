import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
	name: "example",
	initialState: 0,
	reducers: {
		example: (state, action) => {},
	},
});

export const { example } = exampleSlice.actions;
export default exampleSlice;

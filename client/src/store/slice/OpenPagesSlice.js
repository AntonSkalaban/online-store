import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    openPages: [],
};
export const OpenPagesSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initOpenPage: (state, action) => {
            state.openPages = [action.payload];
        },
        addPrevOpenPage: (state) => {
            state.openPages = [state.openPages[0] - 1, ...state.openPages];
        },
        addNextOpenPage: (state) => {
            state.openPages = [...state.openPages, state.openPages[state.openPages.length - 1] + 1];
        },
    },
});
export const { initOpenPage, addPrevOpenPage, addNextOpenPage } = OpenPagesSlice.actions;
export default OpenPagesSlice.reducer;

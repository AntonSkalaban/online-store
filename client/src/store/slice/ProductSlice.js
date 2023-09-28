import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
};
export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initProducts: (state, action) => {
            state.items = [...action.payload];
        },
        addPrevProducts: (state, action) => {
            state.items = [...action.payload, ...state.items];
        },
        addNextProducts: (state, action) => {
            state.items = [...state.items, ...action.payload];
        },
        deleteAllProducts: (state) => {
            state.items = [];
        },
    },
});
export const { initProducts, addPrevProducts, addNextProducts, deleteAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

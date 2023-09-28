import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
};
export const CheckoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        checkoutAllItems: (state, action) => {
            const existItems = action.payload.filter((i) => i.isDeleted === false);
            state.items = existItems;
        },
        checkoutOneItems: (state, action) => {
            state.items = [action.payload];
        },
        deleteAllCheckoutItems: (state) => {
            state.items = [];
        },
        deleteOneCheckoutItem: (state, action) => {
            state.items = state.items.filter((el) => el._id !== action.payload._id);
        },
    },
});
export const { checkoutAllItems, checkoutOneItems, deleteAllCheckoutItems, deleteOneCheckoutItem } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;

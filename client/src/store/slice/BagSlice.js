import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [],
};
export const BagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        initBagState: (state, action) => {
            state.products = action.payload;
        },
        addBagItem: (state, action) => {
            const productId = action.payload._id;
            const products = [...state.products];
            const productIds = products.map((product) => product._id);
            const index = productIds.indexOf(productId);
            if (index === -1) {
                products.unshift({ ...action.payload, quantity: 1, isDeleted: false });
            }
            else
                products[index].quantity++;
            state.products = products;
        },
        deleteBagItem: (state, action) => {
            const products = [...state.products];
            state.products = products.filter((product) => product._id !== action.payload);
        },
        changeBagItemQuantity: (state, action) => {
            state.products = [...state.products].map((product) => {
                if (product._id === action.payload.id)
                    product.quantity = action.payload.quantity;
                return product;
            });
        },
        changeBagItemStoreState: (state, action) => {
            state.products = state.products.map((product) => {
                if (product._id === action.payload) {
                    product.isDeleted = !product.isDeleted;
                }
                return product;
            });
        },
        deletePurchasedItems: (state, action) => {
            state.products = state.products.filter((product) => {
                if (!action.payload.some(({ _id }) => _id === product._id)) {
                    return product;
                }
            });
        },
    },
});
export const { initBagState, addBagItem, deleteBagItem, changeBagItemQuantity, changeBagItemStoreState, deletePurchasedItems, } = BagSlice.actions;
export default BagSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    productsIds: [],
};
export const ResentlyViewedSlice = createSlice({
    name: 'resentlyViewed',
    initialState,
    reducers: {
        initResentlyViewedState: (state, action) => {
            state.productsIds = action.payload;
        },
        addResentlyViewedItem: (state, action) => {
            const itemId = action.payload;
            const limit = 12;
            const productIds = [...state.productsIds];
            const index = productIds.indexOf(itemId);
            if (index === -1) {
                productIds.unshift(itemId);
                if (productIds.length > limit)
                    productIds.pop();
            }
            else {
                productIds.splice(index, 1);
                productIds.unshift(itemId);
            }
            state.productsIds = productIds;
        },
    },
});
export const { initResentlyViewedState, addResentlyViewedItem } = ResentlyViewedSlice.actions;
export default ResentlyViewedSlice.reducer;

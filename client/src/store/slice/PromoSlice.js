import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isApplied: false,
};
export const PromoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {
        applyPromo: (state) => {
            state.isApplied = true;
        },
    },
});
export const { applyPromo } = PromoSlice.actions;
export default PromoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const initialState = { delivery: {} };
export const DeliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        changeDelivery: (state, action) => {
            state.delivery = action.payload;
        },
    },
});
export const { changeDelivery } = DeliverySlice.actions;
export default DeliverySlice.reducer;

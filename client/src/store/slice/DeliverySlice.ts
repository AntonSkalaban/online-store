import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Delivery } from 'types';

const initialState = { delivery: {} as Delivery };

export const DeliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    changeDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload;
    },
  },
});

export const { changeDelivery } = DeliverySlice.actions;

export default DeliverySlice.reducer;

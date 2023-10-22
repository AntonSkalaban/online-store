import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BagItem } from 'types';

const initialState = {
  items: [] as BagItem[],
};

export const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutAllItems: (state, action: PayloadAction<BagItem[]>) => {
      const existItems = action.payload.filter((i) => i.isDeleted === false);
      state.items = existItems;
    },

    checkoutOneItem: (state, action: PayloadAction<BagItem>) => {
      state.items = [action.payload];
    },

    deleteAllCheckoutItems: (state) => {
      state.items = [];
    },

    deleteOneCheckoutItem: (state, action: PayloadAction<BagItem>) => {
      state.items = state.items.filter((el) => el._id !== action.payload._id);
    },
  },
});

export const { checkoutAllItems, checkoutOneItem, deleteAllCheckoutItems, deleteOneCheckoutItem } =
  CheckoutSlice.actions;

export default CheckoutSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BagItem } from '../../types';

export interface BagItems {
  items: BagItem[];
}

const initialState: BagItems = {
  items: [],
};

export const BagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addBagItem: (state, action: PayloadAction<string>) => {
      const productId = +action.payload;
      const products = [...state.items];
      const productIds = products.map((product) => product.id);

      const index = productIds.indexOf(productId);

      if (index === -1) {
        products.unshift({ id: productId, quantity: 1 });
      } else products[index].quantity++;

      state.items = products;
    },
  },
});

export const { addBagItem } = BagSlice.actions;

export default BagSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BagItem, Product } from '../../types';

export interface BagItems {
  products: BagItem[];
}

const initialState: BagItems = {
  products: [],
};

export const BagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    initBagState: (state, action: PayloadAction<BagItem[]>) => {
      state.products = action.payload;
    },

    addBagItem: (state, action: PayloadAction<Product>) => {
      const productId = action.payload._id;
      const products = [...state.products];
      const productIds = products.map((product) => product._id);

      const index = productIds.indexOf(productId);

      if (index === -1) {
        products.unshift({ ...action.payload, quantity: 1, isDeleted: false });
      } else products[index].quantity++;

      state.products = products;
    },

    deleteBagItem: (state, action: PayloadAction<string>) => {
      const products = [...state.products];
      state.products = products.filter((product) => product._id !== action.payload);
    },

    changeBagItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      state.products = [...state.products].map((product) => {
        if (product._id === action.payload.id) product.quantity = action.payload.quantity;
        return product;
      });
    },

    changeBagItemStoreState: (state, action: PayloadAction<string>) => {
      const products = [...state.products];
      state.products = products.map((product) => {
        if (product._id === action.payload) {
          product.isDeleted = !product.isDeleted;
        }
        return product;
      });
    },
  },
});

export const {
  initBagState,
  addBagItem,
  deleteBagItem,
  changeBagItemQuantity,
  changeBagItemStoreState,
} = BagSlice.actions;

export default BagSlice.reducer;

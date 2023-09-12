import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types';

export interface Products {
  items: Product[];
}

const initialState: Products = {
  items: [],
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = [...action.payload];
    },
    addPrevProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = [...action.payload, ...state.items];
    },

    addNextProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = [...state.items, ...action.payload];
    },

    deleteAllProducts: (state) => {
      state.items = [];
    },
  },
});

export const { initProducts, addPrevProducts, addNextProducts, deleteAllProducts } =
  ProductSlice.actions;

export default ProductSlice.reducer;

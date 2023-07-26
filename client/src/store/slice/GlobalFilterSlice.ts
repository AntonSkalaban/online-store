import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormFilterValues } from './FormFilterSlice';

interface SearchBarValue {
  searchValue?: string;
}

export interface GlobalFilterValues extends FormFilterValues, SearchBarValue {}

const searchParams = new URLSearchParams(window.location.search);

const initialState: GlobalFilterValues = {
  category: searchParams.get('category')?.split(',') ?? [],
  brand: searchParams.get('brand')?.split(',') ?? [],
  price: searchParams.get('price')?.split(',') ?? [],
  sort: searchParams.get('sortBy') ?? '',
  searchValue: searchParams.get('searchValue') ?? '',
};

export const GlobalFilterSlice = createSlice({
  name: 'globalFilterValues',
  initialState,
  reducers: {
    updateGlobalState: (state, action: PayloadAction<GlobalFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateGlobalState } = GlobalFilterSlice.actions;

export default GlobalFilterSlice.reducer;

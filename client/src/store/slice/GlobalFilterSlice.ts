import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormFilterValues, resetFilterValue, resetForm } from './FormFilterSlice';
import { CustomObject } from 'helpers/index';

interface SearchBarValue {
  searchValue?: string;
}

interface Page {
  page?: string;
}

export interface GlobalFilterValues extends FormFilterValues, SearchBarValue, Page {}

const searchParams = new URLSearchParams(window.location.search);

const initialState: GlobalFilterValues = {
  category: searchParams.get('category')?.split(',') ?? [],
  brand: searchParams.get('brand')?.split(',') ?? [],
  price: searchParams.get('price')?.split(',') ?? [],
  sort: searchParams.get('sortBy') ?? '',
  searchValue: searchParams.get('searchValue') ?? '',
  page: searchParams.get('page') ?? '0',
};

export const GlobalFilterSlice = createSlice({
  name: 'globalFilterValues',
  initialState,
  reducers: {
    updateGlobalState: (state, { payload }: PayloadAction<GlobalFilterValues>) => {
      if (!payload?.page) return { ...state, ...payload, page: '0' };
      return { ...state, ...payload };
    },

    updateSearchBarValue: (state, { payload }: PayloadAction<GlobalFilterValues>) => {
      return { ...CustomObject.resetAllFields(state), ...payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(resetForm, (state) => {
      return { ...CustomObject.resetAllFields(state, ['searchValue']), page: '0' };
    });
    builder.addCase(resetFilterValue, (state, { payload }) => {
      return { ...state, ...payload, page: '0' };
    });
  },
});

export const { updateGlobalState, updateSearchBarValue } = GlobalFilterSlice.actions;

export default GlobalFilterSlice.reducer;

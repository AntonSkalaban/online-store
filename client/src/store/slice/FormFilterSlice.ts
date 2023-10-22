import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomObject } from 'helpers/CustomObject';
import { GlobalFilterValues, updateSearchBarValue } from './GlobalFilterSlice';

export interface FormFilterValues {
  category?: string[];
  brand?: string[];
  price?: string[];
  sort?: string;
}

const initialState: FormFilterValues = {
  category: [],
  brand: [],
  price: [],
  sort: '',
};

export const FormFilterValuesSlice = createSlice({
  name: 'formFilterValues',
  initialState,
  reducers: {
    initFormState: (state, { payload }: PayloadAction<GlobalFilterValues>) => {
      const filterValues = { ...payload };
      delete filterValues.searchValue;
      delete filterValues.page;
      state = filterValues;
    },
    updateFormState: (state, action: PayloadAction<FormFilterValues>) => {
      return { ...state, ...action.payload };
    },
    resetForm: (state) => {
      return { ...CustomObject.resetAllFields(state) };
    },
    resetFilterValue: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateSearchBarValue, (state) => {
      return CustomObject.resetAllFields(state);
    });
  },
});

export const { initFormState, updateFormState, resetForm, resetFilterValue } =
  FormFilterValuesSlice.actions;

export default FormFilterValuesSlice.reducer;

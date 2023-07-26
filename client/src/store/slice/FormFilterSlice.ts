import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    updateFormState: (state, action: PayloadAction<FormFilterValues>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormState } = FormFilterValuesSlice.actions;

export default FormFilterValuesSlice.reducer;

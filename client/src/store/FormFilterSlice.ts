import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// export enum FormFilterFields {
//   Category = 'category',
//   SortBy = 'sortBy',
// }

export interface FormFilterValues {
  category?: string[];
  sortBy?: string;
}

const initialState: FormFilterValues = {
  category: [],
  sortBy: '',
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

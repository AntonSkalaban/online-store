import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    category: [],
    brand: [],
    price: [],
    sort: '',
};
export const FormFilterValuesSlice = createSlice({
    name: 'formFilterValues',
    initialState,
    reducers: {
        updateFormState: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});
export const { updateFormState } = FormFilterValuesSlice.actions;
export default FormFilterValuesSlice.reducer;

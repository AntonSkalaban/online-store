import { createSlice } from '@reduxjs/toolkit';
const searchParams = new URLSearchParams(window.location.search);
const initialState = {
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
        updateGlobalState: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});
export const { updateGlobalState } = GlobalFilterSlice.actions;
export default GlobalFilterSlice.reducer;

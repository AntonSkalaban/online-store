import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isEntered: false,
};
export const AddressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        enterAddress: (state) => {
            state.isEntered = true;
        },
    },
});
export const { enterAddress } = AddressSlice.actions;
export default AddressSlice.reducer;

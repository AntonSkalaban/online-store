import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { resetFilterValue, resetForm } from './FormFilterSlice';
import { updateGlobalState } from './GlobalFilterSlice';

const initialState = {
  openPages: [] as number[],
};

export const OpenPagesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initOpenPage: (state, action: PayloadAction<number>) => {
      state.openPages = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetForm, (state) => {
      state.openPages = [0];
    });
    builder.addCase(resetFilterValue, (state) => {
      state.openPages = [0];
    });
    builder.addCase(updateGlobalState, (state, { payload }) => {
      if (payload.page) {
        state.openPages[0] > +payload.page
          ? state.openPages.unshift(+payload.page)
          : state.openPages.push(+payload.page);
      } else {
        state.openPages = [0];
      }
    });
  },
});

export const { initOpenPage } = OpenPagesSlice.actions;

export default OpenPagesSlice.reducer;

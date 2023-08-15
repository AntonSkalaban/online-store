import { configureStore } from '@reduxjs/toolkit';
import { productAPI, categoryAPI } from '../services/api';
import { BagSlice, FormFilterSlice, GlobalFilterSlice, ResentlyViewedSlice } from './slice';

export const store = configureStore({
  reducer: {
    globalFilterValues: GlobalFilterSlice,
    formFilterValues: FormFilterSlice,
    BagItems: BagSlice,
    ResentlyVewedItems: ResentlyViewedSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware, categoryAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

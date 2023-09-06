import { configureStore } from '@reduxjs/toolkit';
import { productAPI, categoryAPI } from '../services/api';
import {
  ProductSlice,
  BagSlice,
  DeliverySlice,
  FormFilterSlice,
  GlobalFilterSlice,
  ResentlyViewedSlice,
} from './slice';

export const store = configureStore({
  reducer: {
    globalFilterValues: GlobalFilterSlice,
    formFilterValues: FormFilterSlice,
    products: ProductSlice,
    BagItems: BagSlice,
    delivery: DeliverySlice,
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

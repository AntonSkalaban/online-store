import { configureStore } from '@reduxjs/toolkit';
import { productAPI, categoryAPI, filterAPI } from '../services/api';
import {
  BagSlice,
  DeliverySlice,
  FormFilterSlice,
  GlobalFilterSlice,
  ResentlyViewedSlice,
  OpenPagesSlice,
  CheckoutSlice,
  PromoSlice,
  AddressSlice,
} from './slice';

export const store = configureStore({
  reducer: {
    globalFilterValues: GlobalFilterSlice,
    formFilterValues: FormFilterSlice,
    BagItems: BagSlice,
    openPages: OpenPagesSlice,
    checkoutItems: CheckoutSlice,
    delivery: DeliverySlice,
    promo: PromoSlice,
    address: AddressSlice,
    ResentlyVewedItems: ResentlyViewedSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [filterAPI.reducerPath]: filterAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      productAPI.middleware,
      categoryAPI.middleware,
      filterAPI.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

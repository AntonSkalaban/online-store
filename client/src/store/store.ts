import { configureStore } from '@reduxjs/toolkit';
import { productAPI, categoryAPI } from '../services/api';
import {
  ProductSlice,
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
    products: ProductSlice,
    BagItems: BagSlice,
    openPages: OpenPagesSlice,
    checkoutItems: CheckoutSlice,
    delivery: DeliverySlice,
    promo: PromoSlice,
    address: AddressSlice,
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

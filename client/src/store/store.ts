import { configureStore } from '@reduxjs/toolkit';
import GlobalFilterSlice from './GlobalFilterSlice';
import FormFilterSlice from './FormFilterSlice';
import { productAPI } from '../services/productService';
import { categoryAPI } from '../services/categoryService';

export const store = configureStore({
  reducer: {
    globalFilterValues: GlobalFilterSlice,
    formFilterValues: FormFilterSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([productAPI.middleware, categoryAPI.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

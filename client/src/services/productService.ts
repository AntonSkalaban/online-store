import { GlobalFilterValues } from '../store/GlobalFilterSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Product } from '../types';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getFilterdProducts: build.query<Product[], GlobalFilterValues>({
      query: (filterValues) => ({
        url: `/products`,
        params: new URLSearchParams(filterValues as Record<string, string>),
      }),
    }),

    getProduct: build.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),

    getProductBrands: build.query<string[], void>({
      query: () => `/products/brands`,
    }),

    getProductPrices: build.query<string[], void>({
      query: () => `/products/prices`,
    }),
  }),
});

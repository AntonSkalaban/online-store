import { GlobalFilterValues } from '../../store/slice/GlobalFilterSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Product, ResponceData } from '../../types';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getFilterdProducts: build.query<ResponceData, GlobalFilterValues>({
      query: (filterValues) => ({
        url: `/products`,
        params: new URLSearchParams(filterValues as Record<string, string>),
      }),
    }),

    getProduct: build.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});
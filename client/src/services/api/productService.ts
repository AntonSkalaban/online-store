import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GlobalFilterValues } from 'store/slice/';
import { Product, ResponceData } from 'types';
import { API_URL } from './const';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getFilterdProducts: build.query<ResponceData, GlobalFilterValues>({
      query: (filterValues) => {
        return {
          url: `/products`,
          params: new URLSearchParams(filterValues as Record<string, string>),
        };
      },
    }),

    getProduct: build.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

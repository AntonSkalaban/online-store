import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GlobalFilterValues } from 'store/slice/';
import { Product, ResponceData } from 'types';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://expensive-raincoat-hare.cyclic.cloud/' }),
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

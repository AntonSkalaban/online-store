import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GlobalFilterValues } from 'store/slice/';
import { Product, ResponceData } from 'types';
import { API_URL } from './const';

interface TransformeResponse extends ResponceData {
  page: number;
}
export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getFilterdProducts: build.query<TransformeResponse, GlobalFilterValues>({
      query: (filterValues) => {
        return {
          url: `/products`,
          params: new URLSearchParams(filterValues as Record<string, string>),
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: ResponceData, _meta, arg) => {
        return {
          ...response,
          page: +(arg.page || 0),
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.page < newItems.page) {
          currentCache.products.push(...newItems.products);
          return currentCache;
        } else if (currentCache.page < newItems.page) {
          currentCache.products.unshift(...newItems.products);
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getProduct: build.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

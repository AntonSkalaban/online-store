import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Category } from 'types';
import { API_URL } from './const';

export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getCategoryName: build.query<Category[], void>({
      query: () => `/categories`,
    }),
  }),
});

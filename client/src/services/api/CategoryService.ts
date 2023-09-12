import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Category } from 'types';

export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getCategoryName: build.query<Category[], void>({
      query: () => `/categories`,
    }),
  }),
});

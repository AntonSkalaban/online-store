import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Category } from 'types';

export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://expensive-raincoat-hare.cyclic.cloud/' }),
  endpoints: (build) => ({
    getCategoryName: build.query<Category[], void>({
      query: () => `/categories`,
    }),
  }),
});

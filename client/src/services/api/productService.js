import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from './const';
export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getFilterdProducts: build.query({
            query: (filterValues) => {
                return {
                    url: `/products`,
                    params: new URLSearchParams(filterValues),
                };
            },
        }),
        getProduct: build.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

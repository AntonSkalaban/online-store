import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://expensive-raincoat-hare.cyclic.cloud/' }),
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

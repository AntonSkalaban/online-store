import React from 'react';
import { Product } from '../types';
import { productAPI } from '../services';

interface FetchingProductProps {
  productId: string;
}

export const withProductFetching = (
  Component: React.FC<FetchingProductProps & { product: Product }>
) => {
  return (props: FetchingProductProps) => {
    const { data: product, isFetching } = productAPI.useGetProductQuery(props.productId);

    if (isFetching) return <div>Loading...</div>;
    if (product) return <Component product={product} {...props} />;

    return null;
  };
};

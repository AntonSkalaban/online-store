import React from 'react';
import { Product } from '../types';
import { productAPI } from '../services';
import { LoadingSpinner } from '../components/UI/LodaingSpinner/LoadingSpinner';

interface FetchingProductProps {
  productId: string;
}

export const withProductFetching = (
  Component: React.FC<FetchingProductProps & { product: Product }>
) => {
  return (props: FetchingProductProps) => {
    const { data: product, isFetching } = productAPI.useGetProductQuery(props.productId);

    if (isFetching) return <LoadingSpinner />;
    if (product) return <Component product={product} {...props} />;

    return null;
  };
};

import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { productAPI } from '../../services/productService';

interface ProductFromLSProps {
  cardId: number;
}
export const ProductFromLS = ({ cardId }: ProductFromLSProps) => {
  const { data, isFetching } = productAPI.useGetProductQuery(String(cardId));

  if (isFetching) return <div>Loading...</div>;
  if (data) return <ProductCard product={data} />;
  return <></>;
};

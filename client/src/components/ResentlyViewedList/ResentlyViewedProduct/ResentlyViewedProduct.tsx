import React from 'react';
import { productAPI } from '../../../services/productService';
import './style.css';

interface ProductFromLSProps {
  cardId: number;
}
export const ResentlyViewedProduct = ({ cardId }: ProductFromLSProps) => {
  const { data, isFetching } = productAPI.useGetProductQuery(String(cardId));

  if (isFetching) return <div>Loading...</div>;
  if (data)
    return (
      <div className="resently-viewed-product">
        <img className="product-image" src={data.images[0]} />
      </div>
    );

  return null;
};

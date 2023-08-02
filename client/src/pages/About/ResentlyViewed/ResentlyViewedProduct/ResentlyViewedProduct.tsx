import React from 'react';
import { NavLink } from 'react-router-dom';
import { productAPI } from '../../../../services/api/productService';
import './style.css';

interface ProductFromLSProps {
  productId: string;
}
export const ResentlyViewedProduct = ({ productId }: ProductFromLSProps) => {
  const { data, isFetching } = productAPI.useGetProductQuery(productId);

  if (isFetching) return <div>Loading...</div>;
  if (data)
    return (
      <div className="resently-viewed-product">
        <NavLink to={`/about/${productId}`}>
          <img className="product-image" src={data.images[0]} />
        </NavLink>
      </div>
    );

  return null;
};

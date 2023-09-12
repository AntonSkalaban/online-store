import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../../../../types/types';
import { withProductFetching } from '../../../../hok/withProductFetching';
import './style.css';

interface ResentlyViewedProductProps {
  product: Product;
}

const ResentlyViewedProduct: React.FC<ResentlyViewedProductProps> = ({ product }) => {
  return (
    <div className="resently-viewed-product slider-card">
      <NavLink to={`/about/${product._id}`}>
        <img className="product-image" src={product.images[0]} />
      </NavLink>
    </div>
  );
};
export const FetchingResentlyViewedProduct = withProductFetching(ResentlyViewedProduct);

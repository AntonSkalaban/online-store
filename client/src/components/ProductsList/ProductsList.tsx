import React from 'react';
import './style.css';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsListProps {
  data: Product[] | undefined;
  isFetching: boolean;
}

export const ProductsList = ({ data, isFetching }: ProductsListProps) => {
  if (isFetching) return <div>Loading...</div>;

  if (!data?.length) return <div>Not found</div>;

  return (
    <div className="proucts-list">
      {data.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

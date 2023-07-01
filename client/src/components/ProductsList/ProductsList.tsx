import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import './style.css';

interface ProductsListProps {
  data: Product[] | undefined;
  isFetching: boolean;
}

export const ProductsList = ({ data, isFetching }: ProductsListProps) => {
  if (isFetching) return <div>Loading...</div>;

  if (!data?.length) return <div>Not found</div>;

  return (
    <>
      <p className="proucts-total"> {data.length} prdoducts found </p>
      <div className="proucts-list">
        {data.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

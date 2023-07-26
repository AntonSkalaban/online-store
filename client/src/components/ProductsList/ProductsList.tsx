import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import './style.css';

interface ProductsListProps {
  data: Product[] | undefined;
  isFetching: boolean;
}

export const ProductsList: React.FC<ProductsListProps> = ({ data, isFetching }) => {
  if (isFetching) return <div>Loading...</div>;

  if (!data?.length) return <div>Not found</div>;

  return (
    <>
      <div className="products-list">
        <p className="products-list__heaeder"> {data.length} prdoducts found </p>
        {data.map((product) => {
          return <ProductCard key={product._id} className="big-card" product={product} />;
        })}
      </div>
    </>
  );
};

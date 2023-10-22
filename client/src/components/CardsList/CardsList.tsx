import React from 'react';
import { Product } from 'types';
import { ProductCard } from '..';
import './style.css';

interface CardListParams {
  products: Product[];
  cardSize: string;
}

export const CardsList: React.FC<CardListParams> = ({ products, cardSize }) => {
  return (
    <div className="card-list">
      {products.map((product) => {
        return <ProductCard key={product._id} className={`${cardSize}-card`} product={product} />;
      })}
    </div>
  );
};

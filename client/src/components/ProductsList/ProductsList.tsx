import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import './style.css';
import { CardsList, Wrapper } from '../../components';

interface ProductsListProps {
  data: Product[] | undefined;
  isFetching: boolean;
}

export const ProductsList: React.FC<ProductsListProps> = ({ data, isFetching }) => {
  if (isFetching) return <div>Loading...</div>;

  if (!data?.length) return <div>Not found</div>;

  return (
    <section className="products-list" style={{ width: '100%' }}>
      <p className="products-list__heaeder"> {data.length} prdoducts found </p>
      <Wrapper>
        <CardsList products={data} cardSize="big" />
      </Wrapper>
    </section>
  );
};

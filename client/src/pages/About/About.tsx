import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../services/api/productService';
import { Wrapper } from '../../components';
import { NavRow } from './NavRow/NavRow';
import { ProductInfo } from './ProductInfo';
import { AlsoLike } from './AlsoLike';
import { ResentlyViewed } from './ResentlyViewed';
import './style.css';

export const About = () => {
  const { id } = useParams();
  const { data, isFetching, error } = productAPI.useGetProductQuery(id ?? '');

  if (isFetching) return <div>Loading...</div>;
  if (!id || error || !data) return <div>Not found</div>;

  const { title, category, brand } = data;

  return (
    <Wrapper>
      <div className="about-page">
        <NavRow category={category} brand={brand} title={title} />

        <ProductInfo product={data} />

        <AlsoLike productId={id} category={category} brand={brand} />
        <ResentlyViewed productId={id} />
      </div>
    </Wrapper>
  );
};

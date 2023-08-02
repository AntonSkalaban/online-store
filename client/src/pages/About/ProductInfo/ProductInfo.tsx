import React from 'react';
import { Product } from '../../../types';
import { ImagesContainer } from './ImagesContainer';
import { InfoContainer } from './InfoContainer';
import './style.css';

interface ProductInfoProps {
  product: Product;
}
export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <section className="about__main">
      <ImagesContainer images={product.images} />
      <InfoContainer product={product} />
    </section>
  );
};

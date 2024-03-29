import React, { useState } from 'react';
import { Product } from 'types';
import { NavLink } from 'react-router-dom';
import { ProductCardPrice } from './ProductCardPrice';
import './style.css';

interface ProductCardProps {
  product: Product;
  className: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const [imageIndx, setImageIndx] = useState(0);
  const { _id, title, images, price, discountPercentage, discountPrice } = product;
  const isOnSale = discountPercentage > 0;

  return (
    <article className={`product-card ${className}`}>
      <NavLink className="product-card__link" to={`/about/${_id}`}>
        <div className={`product-card__image-container ${className}__img-container`}>
          <img
            className="product-image"
            src={images[imageIndx]}
            onMouseEnter={() => {
              if (images[1]) setImageIndx(1);
            }}
            onMouseLeave={() => {
              setImageIndx(0);
            }}
          />
          {isOnSale && <p className="product-card__discount">-{Math.ceil(discountPercentage)}%</p>}
        </div>

        <div className="product-card__info-container">
          <p className="product-card__title text_bag ">{title}</p>
          <ProductCardPrice
            price={price}
            discountPrice={discountPrice}
            discountPercentage={discountPercentage}
          />
        </div>
      </NavLink>
    </article>
  );
};

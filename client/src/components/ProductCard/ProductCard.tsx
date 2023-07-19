import React, { useState } from 'react';
import { Product } from '../../types';
import { NavLink } from 'react-router-dom';
import './style.css';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, title, images, price, discountPercentage, discountPrice } = product;
  const isOnSale = discountPercentage > 0;
  const [imageIndx, setImageIndx] = useState(0);

  return (
    <article className="product-card">
      <NavLink to={`/about/${_id}`}>
        <div className="product-card__image-container">
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
          <p className="product-card__title">{title}</p>
          <p className="product-card__price">
            <span className={`${isOnSale ? 'price_old' : 'price'}`}>${price}</span>
            {isOnSale && <span className="red-text"> ${discountPrice}</span>}
          </p>
        </div>
      </NavLink>
    </article>
  );
};

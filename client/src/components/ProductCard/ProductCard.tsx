import React, { useState } from 'react';
import { Product } from '../../types';
import { NavLink } from 'react-router-dom';
import { getDiscountedPrice } from '../../helpers/getDiscountPrice';
import './style.css';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, title, images, price, discountPercentage } = product;
  const isOnSale = discountPercentage > 0;
  const [imageIndx, setImageIndx] = useState(0);

  return (
    <div className="product-card">
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
          {isOnSale && (
            <div
              className="product-discount"
              style={{
                position: 'absolute',
                top: '10%',
                left: '0',
                backgroundColor: 'gray',
                color: 'red',
              }}
            >
              <p>-{Math.ceil(discountPercentage)}%</p>
            </div>
          )}
        </div>
      </NavLink>
      <div className="product-card__info-container">
        <p className="product-price">
          <span className="price">${price}</span>
          {isOnSale && (
            <span className="discount-price">
              {' '}
              ${getDiscountedPrice(price, discountPercentage)}
            </span>
          )}
        </p>
        <p className="product-card__title">{title}</p>
      </div>
    </div>
  );
};

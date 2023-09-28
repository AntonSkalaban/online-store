import React from 'react';
import './style.css';

interface PriceProps {
  price: number;
  discountPercentage: number;
  discountPrice: number;
}

export const Price: React.FC<PriceProps> = ({ price, discountPercentage, discountPrice }) => {
  const isOnSale = discountPercentage > 0;

  return isOnSale ? (
    <div className="product__price-block">
      <p className="product__price product__price_now">Now ${discountPrice} </p>
      <p className="product__price_old">
        Was ${price} <span className="product__discount">({discountPercentage}%)</span>
      </p>
    </div>
  ) : (
    <p className="product__price-block product__price">${price}</p>
  );
};

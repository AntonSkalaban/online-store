import React from 'react';
import './style.css';

interface PProductCardPriceProps {
  price: number;
  discountPrice: number;
  discountPercentage: number;
}

export const ProductCardPrice: React.FC<PProductCardPriceProps> = ({
  price,
  discountPrice,
  discountPercentage,
}) => {
  const isOnSale = discountPercentage > 0;
  return (
    <p className="product-card__price">
      <span className={`${isOnSale ? 'price_old' : 'price'}`}>${price}</span>
      {isOnSale && <span className="red-text"> ${discountPrice}</span>}
    </p>
  );
};

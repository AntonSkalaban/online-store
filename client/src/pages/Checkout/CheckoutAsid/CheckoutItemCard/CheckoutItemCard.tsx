import React from 'react';
import { BagItem } from 'types';
import { ProductCardPrice } from 'components/ProductCard/ProductCardPrice';
import './style.css';

interface CheckoutItemProps {
  product: BagItem;
}

export const CheckoutItemCard: React.FC<CheckoutItemProps> = ({ product }) => {
  const { images, price, discountPercentage, discountPrice, description, quantity } = product;

  return (
    <div className="bag-item">
      <div className="checkout-card__image-container">
        <div className="image-container">
          <img className="product-image" src={images[0]} />
        </div>
      </div>
      <div className="checkout-card__info-container">
        <ProductCardPrice
          price={price}
          discountPrice={discountPrice}
          discountPercentage={discountPercentage}
        />
        <p className="checkout-card__description  text_bag">{description}</p>
        <p className="bag-card__qty text_bag">{`Qty ${quantity}`}</p>
      </div>
    </div>
  );
};

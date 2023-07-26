import React from 'react';
import { Bag } from '../../../helpers';
import { Button } from '../../../components/UI';
import './style.css';
interface InfoContainerProps {
  id: string;
  description: string;
  discountPrice: number;
  discountPercentage: number;
  price: number;
}

export const InfoContainer = ({
  id,
  description,
  discountPercentage,
  discountPrice,
  price,
}: InfoContainerProps) => {
  const isOnSale = discountPercentage > 0;

  return (
    <div className="poduct__info-container">
      <p className="product__description">{description}</p>

      {isOnSale ? (
        <>
          <p className="product__price_now">Now ${discountPrice} </p>
          <p className="product__price_old">
            Was ${price} <span className="product__discount">({discountPercentage}%)</span>
          </p>
        </>
      ) : (
        <p className="price">${price}</p>
      )}

      <Button className="bag-btn" label="add to bag" hanldeClick={() => Bag.add(id)} />
    </div>
  );
};

import React from 'react';
import { Bag } from '../../../helpers/Bag';

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
      <p>{description}</p>

      {isOnSale ? (
        <>
          <p className="price_new">Now {discountPrice} </p>
          <p>
            Was ${price} <span className="discount">({discountPercentage}%)</span>
          </p>
        </>
      ) : (
        <p className="price">${price}</p>
      )}

      <button onClick={() => Bag.add(id)}>add to bag</button>
    </div>
  );
};

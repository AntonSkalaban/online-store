import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addBagItem } from '../../../../store/slice';
import { Product } from 'types';
import { Button } from '../../../../components/UI';
import { Banner } from '../../../../components';
import { Rating } from './Rating/Rating';
import { Price } from './Price/Price';
import { Promo } from './Promo/Promo';
import './style.css';

interface InfoContainerProps {
  product: Product;
}

export const InfoContainer: React.FC<InfoContainerProps> = ({ product }) => {
  const dispatch = useDispatch();

  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const { _id, title, description, rating, discountPercentage, discountPrice, price } = product;

  const addToBag = () => {
    if (isAddedToBag) return;
    dispatch(addBagItem(_id));
    setIsAddedToBag(true);
    setTimeout(() => setIsAddedToBag(false), 2000);
  };

  return (
    <div className="poduct__info-container">
      <p className="product__title">{title}</p>

      <Price price={price} discountPercentage={discountPercentage} discountPrice={discountPrice} />
      <Rating rating={rating} />

      <p className="product__description">{description}</p>

      <Promo />

      <Button
        className="bag-btn"
        label="add to bag"
        disabled={isAddedToBag}
        hanldeClick={addToBag}
      />
      {isAddedToBag && createPortal(<Banner title="AddedToBag" />, document.body)}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBagItems } from 'store/selectors';
import { LocalStorage } from 'services';
import { useActions } from 'hooks';
import { Product } from 'types';
import { Rating } from './Rating/Rating';
import { Price } from './Price/Price';
import { Promo } from './Promo/Promo';
import { Button } from 'components/UI';
import { PortalBanner } from 'components';
import './style.css';

interface InfoContainerProps {
  product: Product;
}

export const InfoContainer: React.FC<InfoContainerProps> = ({ product }) => {
  const { addBagItem } = useActions();
  const bagItems = useSelector(getBagItems);

  const [isAddedToBag, setIsAddedToBag] = useState(false);

  const { title, description, rating, discountPercentage, discountPrice, price } = product;

  const addToBag = () => {
    if (isAddedToBag) return;
    addBagItem(product);
    setIsAddedToBag(true);
  };

  useEffect(() => {
    LocalStorage.setArray('bagItems', bagItems);
  }, [bagItems]);

  return (
    <>
      <PortalBanner
        isOpen={isAddedToBag}
        title="added to bag"
        closePortal={() => setIsAddedToBag(false)}
      />
      <div className="poduct__info-container">
        <p className="product__title">{title}</p>

        <Price
          price={price}
          discountPercentage={discountPercentage}
          discountPrice={discountPrice}
        />
        <Rating rating={rating} />

        <p className="product__description text text_about">{description}</p>

        <Promo />

        <Button
          className="bag-btn"
          label="add to bag"
          disabled={isAddedToBag}
          hanldeClick={addToBag}
        />
      </div>
    </>
  );
};

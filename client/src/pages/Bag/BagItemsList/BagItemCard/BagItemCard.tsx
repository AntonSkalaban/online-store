import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions, useChangeUrlPath, useGetWidth } from 'hooks';
import { BagItem } from 'types';
import { Button } from 'components/UI';
import { ProductCardPrice } from 'components';
import { QuantityList } from '../../BagDropdown/InputsList/QuantityList';
import { BagDropdown } from '../../BagDropdown/BagDropdown';
import CloseImg from 'assets/svg/close.svg';
import './style.css';

interface BagItemProps {
  product: BagItem;
}

export const BagItemCard: React.FC<BagItemProps> = ({ product }) => {
  const {
    _id,
    title,
    images,
    price,
    discountPercentage,
    discountPrice,
    description,
    quantity,
    isDeleted,
  } = product;

  const { deleteBagItem, checkoutOneItem, changeBagItemStoreState } = useActions();
  const { changeUrlPath } = useChangeUrlPath();

  const ref = useRef(null);
  const witdh = useGetWidth(ref);

  useEffect(() => {
    return () => {
      if (isDeleted) deleteBagItem(_id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeCheckoutClick = () => {
    checkoutOneItem(product);
    changeUrlPath('/checkout');
  };

  return (
    <div className="bag-item" ref={ref}>
      <div className={`bag-item__content-box ${isDeleted ? 'bag-item__content-box_deleted' : ''}`}>
        <div className="checkout-card__image-container">
          <NavLink to={`/about/${_id}`}>
            <img className="product-image" src={images[0]} />
          </NavLink>
        </div>
        <div className="bag-card__info-container">
          <ProductCardPrice
            price={price}
            discountPrice={discountPrice}
            discountPercentage={discountPercentage}
          />

          {witdh > 450 ? (
            <p className="bag-card__description text_bag">{description}</p>
          ) : (
            <p className="bag-card__description text_bag">{title}</p>
          )}

          <div className="bag-card__controllers-box">
            {' '}
            <BagDropdown title={`Qty ${quantity}`} classNameMod="bag">
              <QuantityList quantity={quantity} productId={_id} />
            </BagDropdown>
            <Button label="Buy now" className="bag-btn" hanldeClick={hanldeCheckoutClick} />
          </div>
        </div>
      </div>
      <div className="bag-card__delete">
        {' '}
        {isDeleted ? (
          <p className="delete-btn bag-section__text " onClick={() => changeBagItemStoreState(_id)}>
            Restore
          </p>
        ) : (
          <img className="delete-btn" src={CloseImg} onClick={() => changeBagItemStoreState(_id)} />
        )}
      </div>
    </div>
  );
};

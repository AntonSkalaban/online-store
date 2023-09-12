import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeBagItemStoreState, deleteBagItem } from '../../../../store/slice';
import { BagItem } from '../../../../types/types';
import { Button } from '../../../../components/UI';
import { ProductCardPrice } from '../../../../components/ProductCard/ProductCardPrice';
import { QuantityList } from '../../BagDropdown/InputsList/QuantityList';
import { BagDropdown } from '../../BagDropdown/BagDropdown';
import CloseImg from '../../../../assets/svg/close.svg';
import './style.css';

interface BagItemProps {
  product: BagItem;
}

export const BagItemCard: React.FC<BagItemProps> = ({ product }) => {
  const {
    _id,
    images,
    price,
    discountPercentage,
    discountPrice,
    description,
    quantity,
    isDeleted,
  } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isDeleted) dispatch(deleteBagItem(_id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bag-item">
      <div className={`bag-item__content-box ${isDeleted ? 'bag-item__content-box_deleted' : ''}`}>
        <div className="bag-card__image-container">
          <div className="image-container">
            <NavLink to={`/about/${_id}`}>
              <img className="product-image" src={images[0]} />
            </NavLink>
          </div>
        </div>
        <div className="bag-card__info-container">
          <ProductCardPrice
            price={price}
            discountPrice={discountPrice}
            discountPercentage={discountPercentage}
          />
          <p className="bag-card__description text text_bag">{description}</p>
          <div className="bag-card__controllers-box">
            {' '}
            <BagDropdown title={`Qty ${quantity}`} classNameMod="bag">
              <QuantityList quantity={quantity} productId={_id} />
            </BagDropdown>
            <Button label="Buy now" className="bag-btn" hanldeClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="bag-card__delete">
        {' '}
        {isDeleted ? (
          <p
            className="delete-btn bag-section__text "
            onClick={() => dispatch(changeBagItemStoreState(_id))}
          >
            Restore
          </p>
        ) : (
          <img
            className="delete-btn"
            src={CloseImg}
            onClick={() => dispatch(changeBagItemStoreState(_id))}
          />
        )}
      </div>
    </div>
  );
};

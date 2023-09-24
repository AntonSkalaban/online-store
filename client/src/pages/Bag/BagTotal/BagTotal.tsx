import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutAllItems } from 'store/slice';
import { getBagItems, getBagItemsTotalPrice, getSelectDeliveryLabel } from 'store/selectors';
import { BagDropdown } from '../BagDropdown/BagDropdown';
import { DeliveryList } from '../BagDropdown/InputsList/DeliveryList';
import Visa from 'assets/svg/visa.svg';
import Master from 'assets/svg/mastercard.svg';
import Maestro from 'assets/svg/maestro.svg';
import { WhiteSection, Button } from 'components/UI';
import './style.css';

export const BagTotal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bagItems = useSelector(getBagItems);
  const totalPrice = useSelector(getBagItemsTotalPrice);
  const deliveryLabel = useSelector(getSelectDeliveryLabel);

  const hanldeCheckoutClick = () => {
    dispatch(checkoutAllItems(bagItems));
    navigate('/checkout');
  };

  return (
    <WhiteSection title="total">
      <p className="bag-section__sub-title">
        Sub-total <span className="bag-section__text">${totalPrice}</span>
      </p>
      <p className="bag-section__sub-title">Delivery</p>
      <BagDropdown title={deliveryLabel} classNameMod="bag">
        <DeliveryList />
      </BagDropdown>

      <Button className="bag-btn" label="checkout" hanldeClick={hanldeCheckoutClick} />
      <p className="bag-section__text text text_bag total__text">
        Got a discount code? Add it in the next step.
      </p>

      <p className="bag-section__text text text_bag total__text"> We accept:</p>
      <div className="bag-section__img-wrapper">
        {' '}
        <img src={Visa} />
        <img src={Master} />
        <img src={Maestro} />
      </div>
    </WhiteSection>
  );
};

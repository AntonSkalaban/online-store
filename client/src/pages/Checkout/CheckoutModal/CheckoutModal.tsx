import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCheckoutItems } from 'store/selectors';
import { useActions, useChangeUrlPath } from 'hooks';
import {
  formatCVC,
  formatCreditCardImg,
  formatCreditCardNumber,
  formatExpirationDate,
} from './InputController';
import { Button } from 'components/UI';
import Card from 'assets/svg/card.svg';
import './style.css';

export const CheckoutModal = () => {
  const { deletePurchasedItems } = useActions();
  const { changeUrlPath } = useChangeUrlPath();

  const checkoutItems = useSelector(getCheckoutItems);

  const [number, setNumber] = useState('');
  const [cardImg, setCardImg] = useState(Card);
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'number') {
      setNumber(formatCreditCardNumber(value));
      if (number.length === 1) return setCardImg(formatCreditCardImg(value));
      return;
    }
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'expiry') {
      return setExpiry(formatExpirationDate(value));
    }
    if (name === 'cvc') {
      return setCvc(formatCVC(value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('You have finished payment!');
    deletePurchasedItems(checkoutItems);
    setTimeout(() => changeUrlPath('/bag'), 1000);
  };

  return (
    <form className="checkout-modal-wrapper" onSubmit={handleSubmit}>
      <div className="modal__input-wrapper">
        <label className="form-input__label">Card number:</label>
        <img className="form-input__img" src={cardImg} />
        <input
          className="form-input"
          type="tel"
          name="number"
          placeholder="XXXX XXXX XXXX XXXX"
          pattern="\d{4} \d{4} \d{4} \d{4}"
          maxLength={19}
          required
          onChange={handleInputChange}
          value={number}
        />
      </div>
      <div className="modal__input-wrapper">
        <label className="form-input__label">Name:</label>
        <input
          className="form-input"
          name="name"
          placeholder="Name"
          required
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div className="modal__small-inputs-container">
        <div className="modal__input-wrapper modal__input-wrapper_small">
          <label className="form-input__label">CVV:</label>
          <input
            className="form-input form-input_small"
            type="tel"
            name="cvc"
            placeholder="XXX"
            pattern="\d{3}"
            required
            onChange={handleInputChange}
            value={cvc}
          />
        </div>
        <div className="modal__input-wrapper modal__input-wrapper_small">
          <label className="form-input__label">M/Y:</label>

          <input
            className="form-input form-input_small"
            type="tel"
            name="expiry"
            placeholder="MM/YY"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            value={expiry}
          />
        </div>
      </div>
      <Button className="bag-btn" label="pay" />
    </form>
  );
};

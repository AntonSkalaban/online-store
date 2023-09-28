import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCheckoutItems } from 'store/selectors';
import { deletePurchasedItems } from 'store/slice';
import { formatCVC, formatCreditCardImg, formatCreditCardNumber, formatExpirationDate, } from './InputController';
import Card from 'assets/svg/card.svg';
import { Button } from 'components/UI';
import './style.css';
export const CheckoutModal = () => {
    const [number, setNumber] = useState('');
    const [cardImg, setCardImg] = useState(Card);
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const checkoutItems = useSelector(getCheckoutItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name === 'number') {
            setNumber(formatCreditCardNumber(value));
            if (number.length === 1)
                return setCardImg(formatCreditCardImg(value));
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
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have finished payment!');
        dispatch(deletePurchasedItems(checkoutItems));
        setTimeout(() => navigate('/bag'), 1000);
    };
    return (React.createElement("form", { className: "checkout-modal-wrapper", onSubmit: handleSubmit },
        React.createElement("div", { className: "modal__input-wrapper" },
            React.createElement("label", { className: "form-input__label" }, "Card number:"),
            React.createElement("img", { className: "form-input__img", src: cardImg }),
            React.createElement("input", { className: "form-input", type: "tel", name: "number", placeholder: "XXXX XXXX XXXX XXXX", pattern: "\\d{4} \\d{4} \\d{4} \\d{4}", maxLength: 19, required: true, onChange: handleInputChange, value: number })),
        React.createElement("div", { className: "modal__input-wrapper" },
            React.createElement("label", { className: "form-input__label" }, "Name:"),
            React.createElement("input", { className: "form-input", name: "name", placeholder: "Name", required: true, onChange: handleInputChange, value: name })),
        React.createElement("div", { className: "modal__small-inputs-container" },
            React.createElement("div", { className: "modal__input-wrapper modal__input-wrapper_small" },
                React.createElement("label", { className: "form-input__label" }, "CVV:"),
                React.createElement("input", { className: "form-input form-input_small", type: "tel", name: "cvc", placeholder: "XXX", pattern: "\\d{3}", required: true, onChange: handleInputChange, value: cvc })),
            React.createElement("div", { className: "modal__input-wrapper modal__input-wrapper_small" },
                React.createElement("label", { className: "form-input__label" }, "M/Y:"),
                React.createElement("input", { className: "form-input form-input_small", type: "tel", name: "expiry", placeholder: "MM/YY", pattern: "\\d\\d/\\d\\d", required: true, onChange: handleInputChange, value: expiry }))),
        React.createElement(Button, { className: "bag-btn", label: "pay" })));
};

import React from 'react';
import { useSelector } from 'react-redux';
import { getCheckoutItems } from 'store/selectors';
import { CheckoutItemCard } from '../CheckoutItemCard/CheckoutItemCard';
import './style.css';
export const CheckoutItemsList = () => {
    const checkoutItems = useSelector(getCheckoutItems);
    return (React.createElement("div", { className: "checkout__items-list" }, checkoutItems.map((item) => {
        return React.createElement(CheckoutItemCard, { key: item._id, product: item });
    })));
};

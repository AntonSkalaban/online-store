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
    return (React.createElement(WhiteSection, { title: "total" },
        React.createElement("p", { className: "bag-section__sub-title" },
            "Sub-total ",
            React.createElement("span", { className: "bag-section__text" },
                "$",
                totalPrice)),
        React.createElement("p", { className: "bag-section__sub-title" }, "Delivery"),
        React.createElement(BagDropdown, { title: deliveryLabel, classNameMod: "bag" },
            React.createElement(DeliveryList, null)),
        React.createElement(Button, { className: "bag-btn", label: "checkout", hanldeClick: hanldeCheckoutClick }),
        React.createElement("p", { className: "bag-section__text text text_bag total__text" }, "Got a discount code? Add it in the next step."),
        React.createElement("p", { className: "bag-section__text text text_bag total__text" }, " We accept:"),
        React.createElement("div", { className: "bag-section__img-wrapper" },
            ' ',
            React.createElement("img", { src: Visa }),
            React.createElement("img", { src: Master }),
            React.createElement("img", { src: Maestro }))));
};

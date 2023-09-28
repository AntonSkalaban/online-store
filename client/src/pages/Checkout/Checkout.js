import React from 'react';
import { PromoForm } from './PromoForm/PromoForm';
import { AddressForm } from './AddressForm/AddressForm';
import { CheckoutAsid } from './CheckoutAsid/CheckoutAsid';
import { WhiteSection, Wrapper } from 'components/UI';
import './style.css';
export const Checkout = () => {
    return (React.createElement("div", { className: "checkout page_gray" },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "page-section__container" },
                React.createElement("div", { className: "page-section__main" },
                    React.createElement(PromoForm, null),
                    React.createElement(WhiteSection, { title: 'Delivery address' },
                        React.createElement(AddressForm, null))),
                React.createElement("div", { className: "page-section__asid" },
                    React.createElement(CheckoutAsid, null))))));
};

import React from 'react';
import { ProductCardPrice } from 'components/ProductCard/ProductCardPrice';
import './style.css';
export const CheckoutItemCard = ({ product }) => {
    const { images, price, discountPercentage, discountPrice, description, quantity } = product;
    return (React.createElement("div", { className: "bag-item" },
        React.createElement("div", { className: "checkout-card__image-container" },
            React.createElement("div", { className: "image-container" },
                React.createElement("img", { className: "product-image", src: images[0] }))),
        React.createElement("div", { className: "checkout-card__info-container" },
            React.createElement(ProductCardPrice, { price: price, discountPrice: discountPrice, discountPercentage: discountPercentage }),
            React.createElement("p", { className: "checkout-card__description  text_bag" }, description),
            React.createElement("p", { className: "bag-card__qty text_bag" }, `Qty ${quantity}`))));
};

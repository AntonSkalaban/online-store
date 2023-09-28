import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCardPrice } from './ProductCardPrice';
import './style.css';
export const ProductCard = ({ product, className }) => {
    const [imageIndx, setImageIndx] = useState(0);
    const { _id, title, images, price, discountPercentage, discountPrice } = product;
    const isOnSale = discountPercentage > 0;
    return (React.createElement("article", { className: `product-card ${className}` },
        React.createElement(NavLink, { className: "product-card__link", to: `/about/${_id}` },
            React.createElement("div", { className: `product-card__image-container ${className}__img-container` },
                React.createElement("img", { className: "product-image", src: images[imageIndx], onMouseEnter: () => {
                        if (images[1])
                            setImageIndx(1);
                    }, onMouseLeave: () => {
                        setImageIndx(0);
                    } }),
                isOnSale && React.createElement("p", { className: "product-card__discount" },
                    "-",
                    Math.ceil(discountPercentage),
                    "%")),
            React.createElement("div", { className: "product-card__info-container" },
                React.createElement("p", { className: "product-card__title text_bag " }, title),
                React.createElement(ProductCardPrice, { price: price, discountPrice: discountPrice, discountPercentage: discountPercentage })))));
};

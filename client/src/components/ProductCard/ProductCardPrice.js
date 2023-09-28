import React from 'react';
import './style.css';
export const ProductCardPrice = ({ price, discountPrice, discountPercentage, }) => {
    const isOnSale = discountPercentage > 0;
    return (React.createElement("p", { className: "product-card__price" },
        React.createElement("span", { className: `${isOnSale ? 'price_old' : 'price'}` },
            "$",
            price),
        isOnSale && React.createElement("span", { className: "red-text" },
            " $",
            discountPrice)));
};

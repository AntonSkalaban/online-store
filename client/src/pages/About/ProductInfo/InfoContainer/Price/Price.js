import React from 'react';
import './style.css';
export const Price = ({ price, discountPercentage, discountPrice }) => {
    const isOnSale = discountPercentage > 0;
    return isOnSale ? (React.createElement("div", { className: "product__price-block" },
        React.createElement("p", { className: "product__price product__price_now" },
            "Now $",
            discountPrice,
            " "),
        React.createElement("p", { className: "product__price_old" },
            "Was $",
            price,
            " ",
            React.createElement("span", { className: "product__discount" },
                "(",
                discountPercentage,
                "%)")))) : (React.createElement("p", { className: "product__price-block product__price" },
        "$",
        price));
};

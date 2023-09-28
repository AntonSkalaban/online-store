import React from 'react';
import { ProductCard } from '..';
import './style.css';
export const CardsList = ({ products, cardSize }) => {
    return (React.createElement("div", { className: "card-list" }, products.map((product) => {
        return React.createElement(ProductCard, { key: product._id, className: `${cardSize}-card`, product: product });
    })));
};

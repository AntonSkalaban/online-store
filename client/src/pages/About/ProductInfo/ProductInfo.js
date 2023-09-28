import React from 'react';
import { ImagesContainer } from './ImagesContainer';
import { InfoContainer } from './InfoContainer';
import './style.css';
export const ProductInfo = ({ product }) => {
    return (React.createElement("section", { className: "about__main" },
        React.createElement(ImagesContainer, { images: product.images }),
        React.createElement(InfoContainer, { product: product })));
};

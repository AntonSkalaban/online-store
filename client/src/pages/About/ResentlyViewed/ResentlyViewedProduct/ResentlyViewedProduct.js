import React from 'react';
import { NavLink } from 'react-router-dom';
import { withProductFetching } from '../../../../hok/withProductFetching';
import './style.css';
const ResentlyViewedProduct = ({ product }) => {
    return (React.createElement("div", { className: "resently-viewed-product slider-card" },
        React.createElement(NavLink, { to: `/about/${product._id}` },
            React.createElement("img", { className: "product-image", src: product.images[0] }))));
};
export const FetchingResentlyViewedProduct = withProductFetching(ResentlyViewedProduct);

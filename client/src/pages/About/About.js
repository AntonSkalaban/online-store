import React from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../../services/api/productService';
import { Wrapper } from 'components/UI';
import { NavRow } from './NavRow/NavRow';
import { ProductInfo } from './ProductInfo';
import { AlsoLikeSection } from './AlsoLikeSection';
import { ResentlyViewed } from './ResentlyViewed';
import './style.css';
export const About = () => {
    const { id } = useParams();
    const { data, isFetching, error } = productAPI.useGetProductQuery(id ?? '');
    if (isFetching)
        return React.createElement("div", null, "Loading...");
    if (!id || error || !data)
        return React.createElement("div", null, "Not found");
    const { title, category, brand } = data;
    return (React.createElement(Wrapper, null,
        React.createElement("div", { className: "about-page page" },
            React.createElement(NavRow, { category: category, brand: brand, title: title }),
            React.createElement(ProductInfo, { product: data }),
            React.createElement(AlsoLikeSection, { productId: id, category: category, brand: brand }),
            React.createElement(ResentlyViewed, { productId: id }))));
};

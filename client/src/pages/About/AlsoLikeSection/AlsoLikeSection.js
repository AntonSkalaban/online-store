import React from 'react';
import { CardsList } from '../../../components';
import { useGetSameProducts } from '../../../hooks';
import { AboutSection } from '../AboutSection';
export const AlsoLikeSection = ({ productId, category, brand }) => {
    const sameProducts = useGetSameProducts([category], [brand]);
    const products = sameProducts.filter(({ _id }) => productId !== _id);
    return (React.createElement(AboutSection, { title: "You might also like" },
        React.createElement(CardsList, { products: products, cardSize: "small" })));
};

import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemKeys } from 'store/selectors';
import { useGetSameProducts } from 'hooks';
import { Carousel, ProductCard } from 'components';
import { WhiteSection } from 'components/UI';
export const BagAlsoLike = () => {
    const productsCategories = useSelector((state) => getBagItemKeys(state, 'category'));
    const productsBrands = useSelector((state) => getBagItemKeys(state, 'brand'));
    const productsIds = useSelector((state) => getBagItemKeys(state, '_id'));
    const fetchingProducts = useGetSameProducts(productsCategories, productsBrands);
    if (!fetchingProducts.length)
        return null;
    const sameProducts = fetchingProducts.filter(({ _id }) => {
        return !productsIds.includes(_id);
    });
    return (React.createElement(WhiteSection, { title: 'A little something extra?', subtitle: `${sameProducts.length} items` },
        React.createElement(Carousel, null, sameProducts.map((product) => {
            return React.createElement(ProductCard, { key: product._id, className: 'slider-card', product: product });
        }))));
};

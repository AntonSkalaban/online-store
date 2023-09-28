import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResentlyVewedItems } from '../../../store/selectors';
import { addResentlyViewedItem } from '../../../store/slice';
import { LocalStorage } from '../../../services';
import { FetchingResentlyViewedProduct } from './ResentlyViewedProduct/ResentlyViewedProduct';
import { Carousel } from '../../../components';
import { AboutSection } from '../AboutSection';
export const ResentlyViewed = ({ productId }) => {
    const dispatch = useDispatch();
    const productIds = useSelector(getResentlyVewedItems);
    useEffect(() => {
        return () => {
            dispatch(addResentlyViewedItem(productId));
        };
    }, [dispatch, productId]);
    useEffect(() => {
        return () => LocalStorage.setArray('recentlyViewed', productIds);
    }, [productIds]);
    if (!productIds.length)
        return null;
    return (React.createElement(AboutSection, { title: "Resently viewed" },
        React.createElement(Carousel, null, productIds.map((id) => {
            return React.createElement(FetchingResentlyViewedProduct, { key: id, productId: id });
        }))));
};

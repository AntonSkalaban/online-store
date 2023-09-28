import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBagItem } from 'store/slice';
import { getBagItems } from 'store/selectors';
import { LocalStorage } from 'services';
import { Rating } from './Rating/Rating';
import { Price } from './Price/Price';
import { Promo } from './Promo/Promo';
import { Button } from 'components/UI';
import { PortalBanner } from 'components';
import './style.css';
export const InfoContainer = ({ product }) => {
    const dispatch = useDispatch();
    const bagItems = useSelector(getBagItems);
    const [isAddedToBag, setIsAddedToBag] = useState(false);
    const { title, description, rating, discountPercentage, discountPrice, price } = product;
    const addToBag = () => {
        if (isAddedToBag)
            return;
        dispatch(addBagItem(product));
        setIsAddedToBag(true);
    };
    useEffect(() => {
        LocalStorage.setArray('bagItems', bagItems);
    }, [bagItems]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PortalBanner, { isOpen: isAddedToBag, title: "added to bag", closePortal: () => setIsAddedToBag(false) }),
        React.createElement("div", { className: "poduct__info-container" },
            React.createElement("p", { className: "product__title" }, title),
            React.createElement(Price, { price: price, discountPercentage: discountPercentage, discountPrice: discountPrice }),
            React.createElement(Rating, { rating: rating }),
            React.createElement("p", { className: "product__description text text_about" }, description),
            React.createElement(Promo, null),
            React.createElement(Button, { className: "bag-btn", label: "add to bag", disabled: isAddedToBag, hanldeClick: addToBag }))));
};

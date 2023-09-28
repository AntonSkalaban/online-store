import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeBagItemStoreState, checkoutOneItems, deleteBagItem } from 'store/slice';
import { useGetWidth } from 'hooks';
import { Button } from 'components/UI';
import { ProductCardPrice } from 'components/ProductCard/ProductCardPrice';
import { QuantityList } from '../../BagDropdown/InputsList/QuantityList';
import { BagDropdown } from '../../BagDropdown/BagDropdown';
import CloseImg from 'assets/svg/close.svg';
import './style.css';
export const BagItemCard = ({ product }) => {
    const { _id, title, images, price, discountPercentage, discountPrice, description, quantity, isDeleted, } = product;
    const ref = useRef(null);
    const witdh = useGetWidth(ref);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            if (isDeleted)
                dispatch(deleteBagItem(_id));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const hanldeCheckoutClick = () => {
        dispatch(checkoutOneItems(product));
        navigate('/checkout');
    };
    return (React.createElement("div", { className: "bag-item", ref: ref },
        React.createElement("div", { className: `bag-item__content-box ${isDeleted ? 'bag-item__content-box_deleted' : ''}` },
            React.createElement("div", { className: "checkout-card__image-container" },
                React.createElement(NavLink, { to: `/about/${_id}` },
                    React.createElement("img", { className: "product-image", src: images[0] }))),
            React.createElement("div", { className: "bag-card__info-container" },
                React.createElement(ProductCardPrice, { price: price, discountPrice: discountPrice, discountPercentage: discountPercentage }),
                witdh > 450 ? (React.createElement("p", { className: "bag-card__description text_bag" }, description)) : (React.createElement("p", { className: "bag-card__description text_bag" }, title)),
                React.createElement("div", { className: "bag-card__controllers-box" },
                    ' ',
                    React.createElement(BagDropdown, { title: `Qty ${quantity}`, classNameMod: "bag" },
                        React.createElement(QuantityList, { quantity: quantity, productId: _id })),
                    React.createElement(Button, { label: "Buy now", className: "bag-btn", hanldeClick: hanldeCheckoutClick })))),
        React.createElement("div", { className: "bag-card__delete" },
            ' ',
            isDeleted ? (React.createElement("p", { className: "delete-btn bag-section__text ", onClick: () => dispatch(changeBagItemStoreState(_id)) }, "Restore")) : (React.createElement("img", { className: "delete-btn", src: CloseImg, onClick: () => dispatch(changeBagItemStoreState(_id)) })))));
};

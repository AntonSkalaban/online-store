import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBagItemsTotalQuantity } from '../../store/selectors';
import BagLogo from '../../assets/svg/bag.svg';
import './style.css';
export const Nav = () => {
    const itemsInBag = useSelector(getBagItemsTotalQuantity);
    return (React.createElement("nav", { className: "nav" },
        React.createElement(NavLink, { className: "bag__link", to: "/bag" },
            React.createElement("img", { src: BagLogo }),
            itemsInBag > 0 && React.createElement("span", { className: "bag__quantity" }, itemsInBag))));
};

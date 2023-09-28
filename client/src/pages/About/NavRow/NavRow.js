import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { firstCharToUC } from '../../../helpers';
import { updateGlobalState } from '../../../store/slice/GlobalFilterSlice';
import './style.css';
export const NavRow = ({ category, brand, title }) => {
    const dispatch = useDispatch();
    const hanldeNavLinkClick = (value) => {
        dispatch(updateGlobalState(value));
    };
    return (React.createElement("div", { className: "nav-row" },
        React.createElement(NavLink, { to: `/`, className: "nav-row__link", onClick: () => hanldeNavLinkClick({ category: [category] }) }, firstCharToUC(category)),
        '>',
        React.createElement(NavLink, { to: `/`, className: "nav-row__link", onClick: () => hanldeNavLinkClick({ category: [], brand: [brand] }) }, brand),
        '>',
        React.createElement("p", null, title)));
};

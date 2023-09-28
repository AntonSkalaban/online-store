import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, SearchBar } from 'components';
import { Wrapper } from 'components/UI';
import './style.css';
export const Header = () => {
    return (React.createElement("header", { className: "header-footer" },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "header-footer__container" },
                React.createElement(NavLink, { className: "logo", to: "/" }, "Online-store"),
                React.createElement(SearchBar, null),
                React.createElement(Nav, null)))));
};

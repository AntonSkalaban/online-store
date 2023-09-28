import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
export const WhiteSection = ({ title, subtitle, isSubtitleLink, children, }) => {
    return (React.createElement("div", { className: "bag-section" },
        React.createElement("div", { className: "bag-section__header" },
            ' ',
            React.createElement("h3", { className: `bag-section__title ${subtitle || children ? '' : 'bag-section__title_left'}` }, title),
            isSubtitleLink ? (React.createElement(NavLink, { className: "bag-section__link", to: "/bag" },
                ' ',
                React.createElement("p", { className: "bag-section__text" },
                    " ",
                    subtitle))) : (subtitle && React.createElement("p", { className: "bag-section__text" },
                " ",
                subtitle))),
        children && React.createElement("div", { className: "bag-section__body" }, children)));
};

import React from 'react';
import { firstCharToUC } from 'helpers/firstCharToUC';
export const MobileFilterList = ({ openFilterInputs }) => {
    const filterNames = ['category', 'brand', 'price'];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mobile-filter__header" },
            ' ',
            React.createElement("h2", { className: "mobile-filter__title" }, "Filter")),
        React.createElement("ul", null, filterNames.map((filterName) => {
            return (React.createElement("li", { className: "mobile-filter__text", key: filterName, onClick: () => openFilterInputs(filterName) }, firstCharToUC(filterName)));
        }))));
};

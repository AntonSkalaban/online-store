import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItems } from 'store/selectors';
import { BagHeader } from './BagHeader/BagHeader';
import { BagSubtotal } from './BagSubtotal/BagSubtotal';
import { BagAlsoLike } from './BagAlsoLike/BagAlsoLike';
import { BagItemsList } from './BagItemsList/BagItemsList';
import { BagTotal } from './BagTotal/BagTotal';
import { Wrapper } from 'components/UI';
import './style.css';
export const Bag = () => {
    const bagItems = useSelector(getBagItems);
    return (React.createElement("div", { className: "bag page_gray page" },
        React.createElement(Wrapper, null, !bagItems.length ? (React.createElement("p", { className: "bag__empty-msg" }, "No items yet..(")) : (React.createElement("div", { className: "page-section__container" },
            React.createElement("div", { className: "page-section__main" },
                React.createElement(BagHeader, null),
                React.createElement(BagItemsList, null),
                React.createElement(BagSubtotal, null),
                React.createElement(BagAlsoLike, null)),
            React.createElement("div", { className: "page-section__asid" },
                React.createElement(BagTotal, null)))))));
};

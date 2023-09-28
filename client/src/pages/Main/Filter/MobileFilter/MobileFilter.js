import React, { useState } from 'react';
import { RadioBlock } from '../FilterInputsList/RadioList/RadioList';
import { FilterDropdown } from '../FilterDropdown';
import { MobileFilterPortal } from './MobileFilterPortal/MobileFilterPortal';
import './style.css';
export const MobileFilter = () => {
    const [isFilterListOpen, setIsFilterListOpen] = useState(false);
    return (React.createElement("div", { className: "filter__dropdown-container filter__dropdown-container_mobile" },
        React.createElement(FilterDropdown, { title: "sort", classNameMod: "filter" },
            React.createElement(RadioBlock, { title: "sort" })),
        React.createElement("button", { className: "filter__mobile-btn dropdown__header_filter ", onClick: () => {
                setIsFilterListOpen(true);
            } },
            ' ',
            "All Filters"),
        React.createElement(MobileFilterPortal, { isOpen: isFilterListOpen, closePortal: () => setIsFilterListOpen(false) })));
};

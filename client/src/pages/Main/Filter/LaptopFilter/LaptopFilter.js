import React from 'react';
import { RadioBlock } from '../FilterInputsList/RadioList/RadioList';
import { FilterDropdown } from '../FilterDropdown';
import { FilterRange } from '../FilterInputsList/RangeSlider/RangeSlider';
import { FilterList } from '../FilterInputsList/CheckboxesList/CheckboxesList';
export const LaptopFilter = () => {
    return (React.createElement("div", { className: "filter__dropdown-container filter__dropdown-container_laptop" },
        React.createElement(FilterDropdown, { title: "sort", classNameMod: "filter" },
            React.createElement(RadioBlock, { title: "sort", classMode: "dropdown-input-list" })),
        React.createElement(FilterDropdown, { title: "category", classNameMod: "filter" },
            React.createElement(FilterList, { blockName: 'category', classMode: "dropdown-input-list" })),
        React.createElement(FilterDropdown, { title: "brand", classNameMod: "filter" },
            React.createElement(FilterList, { blockName: 'brand', classMode: "dropdown-input-list" })),
        React.createElement(FilterDropdown, { title: "price", classNameMod: "filter" },
            React.createElement(FilterRange, { blockName: 'price', additionalUrlParams: { sort: 'discountPrice-ASC' }, classMode: "dropdown-input-list" }))));
};

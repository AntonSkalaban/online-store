import React, { createContext, useRef, useState } from 'react';
import { useOnClickOutside } from 'hooks';
import { DropdownBagBody, DropdownBagHeader } from 'pages/Bag/BagDropdown';
import { ShareDropdownBody, ShareDropdownHeader, } from 'pages/About/ProductInfo/ImagesContainer/ShareDropdown';
import './style.css';
import { FilterDropdownBody, FilterDropdownHeader } from 'pages/Main/Filter/FilterDropdown';
export const DropdownContext = createContext({
    isOpen: false,
    toggleDropdown: () => { },
    closeDropdown: () => { },
});
export const Dropdown = ({ children, classNameMod, refCallback }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => setIsOpen((value) => !value);
    const closeDropdown = () => setIsOpen(false);
    const clickOutsideHandler = () => {
        if (refCallback)
            refCallback();
        closeDropdown();
    };
    useOnClickOutside(isOpen, dropdownRef, clickOutsideHandler);
    return (React.createElement(DropdownContext.Provider, { value: { isOpen, toggleDropdown, closeDropdown } },
        React.createElement("div", { className: `dropdown dropdown-${classNameMod}`, ref: dropdownRef }, children)));
};
Dropdown.FilterHeader = FilterDropdownHeader;
Dropdown.FilterBody = FilterDropdownBody;
Dropdown.BagHeader = DropdownBagHeader;
Dropdown.BagBody = DropdownBagBody;
Dropdown.ShareHeader = ShareDropdownHeader;
Dropdown.ShareBody = ShareDropdownBody;

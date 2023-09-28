import React, { useContext } from 'react';
import { DropdownContext } from 'components';
export const DropdownBagHeader = ({ title }) => {
    const { isOpen, toggleDropdown } = useContext(DropdownContext);
    const headerClassName = 'dropdown__header dropdown__header_bag text text_bag';
    return (React.createElement("button", { className: headerClassName, onClick: toggleDropdown },
        React.createElement("span", null, title),
        isOpen ? React.createElement("span", null, "\u2304") : React.createElement("span", null, "\u2303")));
};

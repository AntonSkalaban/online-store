import React, { useContext } from 'react';
import { DropdownContext } from 'components';
export const DropdownBagBody = ({ children }) => {
    const { isOpen } = useContext(DropdownContext);
    if (!isOpen)
        return null;
    return React.createElement("div", { className: "dropdown__body dropdown__body-bag" }, children);
};

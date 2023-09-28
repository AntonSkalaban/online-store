import React from 'react';
import { Dropdown } from '../../../components/Dropdown/Dropdown';
export const BagDropdown = ({ title, children, classNameMod }) => {
    return (React.createElement(Dropdown, { classNameMod: classNameMod },
        React.createElement(Dropdown.BagHeader, { title: title }),
        React.createElement(Dropdown.BagBody, null, children)));
};

import React from 'react';
import { Dropdown } from '../../../../../components/Dropdown/Dropdown';
export const ShareDropdown = () => {
    return (React.createElement(Dropdown, { classNameMod: 'share' },
        React.createElement(Dropdown.ShareHeader, null),
        React.createElement(Dropdown.ShareBody, null)));
};

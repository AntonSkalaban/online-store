import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { firstCharToUC } from 'helpers';
import { DropdownContext } from 'components';
export function FilterDropdownHeader({ title }) {
    const { isOpen, toggleDropdown } = useContext(DropdownContext);
    const formFilterValues = useSelector(getFormFilterValues);
    const isSelect = (formFilterValues[title]?.length ?? 0) > 0;
    const headerClassName = `
      dropdown__header 
      dropdown__header_filter 
      ${isOpen ? 'dropdown__header_active' : ''} 
      ${isSelect ? 'dropdown__header_select' : ''}`;
    return (React.createElement("button", { className: headerClassName, onClick: toggleDropdown },
        firstCharToUC(title),
        isOpen ? React.createElement("span", null, "\u2304") : React.createElement("span", null, "\u2303")));
}

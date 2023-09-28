import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { DropdownContext, DropdownHeaderProps } from 'components';

export function FilterDropdownHeader({ title }: DropdownHeaderProps) {
  const { isOpen, toggleDropdown } = useContext(DropdownContext);

  const formFilterValues = useSelector(getFormFilterValues);
  const isSelect = (formFilterValues[title as keyof FormFilterValues]?.length ?? 0) > 0;

  const headerClassName = `
      dropdown__header 
      dropdown__header_filter 
      ${isOpen ? 'dropdown__header_active' : ''} 
      ${isSelect ? 'dropdown__header_select' : ''}`;

  return (
    <button className={headerClassName} onClick={toggleDropdown}>
      {firstCharToUC(title)}
      {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
    </button>
  );
}

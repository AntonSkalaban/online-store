import React, { useContext } from 'react';
import { FormFilterValues } from 'store/slice';
import { DropdownContext } from 'components';
import { FilterFormApplyBtn, FilterFormClearBtn } from '../../FilterForm';

interface FilterDropdownBodyProps {
  children: React.ReactNode;
  title: keyof FormFilterValues;
}

export function FilterDropdownBody({ title, children }: FilterDropdownBodyProps) {
  const { isOpen, closeDropdown } = useContext(DropdownContext);

  if (!isOpen) return null;

  return (
    <div className="dropdown__body">
      <FilterFormClearBtn openFilterName={title} classNameMode={''} />
      {children}
      <FilterFormApplyBtn callback={closeDropdown} />
    </div>
  );
}

import React, { createContext, useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues, getGlobalFilterValues } from '../../store/selectors';
import {
  FormFilterValues,
  deleteAllProducts,
  updateFormState,
  updateGlobalState,
} from '../../store/slice';
import { useOnClickOutside } from '../../hooks';
import { firstCharToUC } from '../../helpers';
import { Button } from '../../components/UI';
import './style.css';

export const DropdownContext = createContext({
  isOpen: false,
  toggleDropdown: () => {},
  closeDropdown: () => {},
});

interface DropdownProps {
  children: React.ReactNode;
  classNameMod: string;
  refCallback?: () => void;
}

export const Dropdown = ({ children, classNameMod, refCallback }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((value) => !value);
  const closeDropdown = () => setIsOpen(false);

  const clickOutsideHandler = () => {
    if (refCallback) refCallback();
    closeDropdown();
  };

  useOnClickOutside(isOpen, dropdownRef, clickOutsideHandler);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, closeDropdown }}>
      <div className={`dropdown dropdown-${classNameMod}`} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

interface DropdownHeaderProps {
  title: string;
}

Dropdown.FilterHeader = function FilterDropdownHeader({ title }: DropdownHeaderProps) {
  const { isOpen, toggleDropdown } = useContext(DropdownContext);

  const formFilterValues = useSelector(getFormFilterValues);
  const isSelect = (formFilterValues[title as keyof FormFilterValues]?.length ?? 0) > 0;

  const headerClassName = `
    dropdown__header 
    dropdown__header_filter 
    ${isOpen ? 'dropdown__header_active' : ''} 
    ${isSelect ? 'dropdown__header_select' : ''}`;

  return (
    <div className={headerClassName} onClick={toggleDropdown}>
      {firstCharToUC(title)}
      {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
    </div>
  );
};

Dropdown.BagHeader = function DropdownBagHeader({ title }: DropdownHeaderProps) {
  const { isOpen, toggleDropdown } = useContext(DropdownContext);

  const headerClassName = 'dropdown__header dropdown__header_bag text text_bag';

  return (
    <div className={headerClassName} onClick={toggleDropdown}>
      <span>{title}</span>
      {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
    </div>
  );
};

interface FilterDropdownBodyProps {
  children: React.ReactNode;
  title: string;
  applyFilter: () => void;
}

Dropdown.FilterBody = function FilterDropdownBody({
  title,
  children,
  applyFilter,
}: FilterDropdownBodyProps) {
  const { isOpen, closeDropdown } = useContext(DropdownContext);

  const dispatch = useDispatch();

  const globalFilterValues = useSelector(getGlobalFilterValues);
  const formFilterValues = useSelector(getFormFilterValues);
  const isSelect = (formFilterValues[title as keyof FormFilterValues]?.length ?? 0) > 0;

  const hadleApplyClick = () => {
    applyFilter();
    closeDropdown();
  };

  const resetFilter = () => {
    const obj = { ...globalFilterValues, [title]: [] };
    dispatch(updateGlobalState(obj));
    dispatch(updateFormState(obj));
    dispatch(deleteAllProducts());
  };

  if (!isOpen) return null;

  return (
    <div className="dropdown__body">
      {isSelect && (
        <p className="dropdown__clear-btn" onClick={resetFilter}>
          Clear
        </p>
      )}
      {children}
      <Button className="filter-btn" label={'Apply filter'} hanldeClick={hadleApplyClick} />
    </div>
  );
};

export interface BagDropdownBodyProps {
  children: React.ReactNode;
}

Dropdown.BagBody = function DropdownBagBody({ children }: BagDropdownBodyProps) {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;
  return <div className="dropdown__body dropdown__body-bag">{children}</div>;
};

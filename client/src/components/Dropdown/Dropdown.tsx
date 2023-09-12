import React, { createContext, useRef, useState } from 'react';
import { useOnClickOutside } from 'hooks';
import { DropdownBagBody, DropdownBagHeader } from 'pages/Bag/BagDropdown';
import {
  ShareDropdownBody,
  ShareDropdownHeader,
} from 'pages/About/ProductInfo/ImagesContainer/ShareDropdown';
import './style.css';
import { FilterDropdownBody, FilterDropdownHeader } from 'pages/Main/Filter/FilterDropdown';
// import { FilterDropdownHeader } from 'pages/Main/Filter/FilterDropdown/FilterDropdownHeader/FilterDropdownHeader';
// import { FilterDropdownBody } from 'pages/Main/Filter/FilterDropdown/FilterDropdownBody/FilterDropdownBody';

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

export interface DropdownHeaderProps {
  title: string;
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

Dropdown.FilterHeader = FilterDropdownHeader;
Dropdown.FilterBody = FilterDropdownBody;

Dropdown.BagHeader = DropdownBagHeader;
Dropdown.BagBody = DropdownBagBody;

Dropdown.ShareHeader = ShareDropdownHeader;
Dropdown.ShareBody = ShareDropdownBody;

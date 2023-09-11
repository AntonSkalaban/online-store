import React, { useContext } from 'react';
import { DropdownContext } from '../../../../components/Dropdown/Dropdown';

interface BagDropdownBodyProps {
  children: React.ReactNode;
}

export const DropdownBagBody = ({ children }: BagDropdownBodyProps) => {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;
  return <div className="dropdown__body dropdown__body-bag">{children}</div>;
};

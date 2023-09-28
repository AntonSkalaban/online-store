import React from 'react';
import { Dropdown } from '../../../components/Dropdown/Dropdown';

interface BagDropdownProps {
  title: string;
  children: React.ReactNode;
  classNameMod: string;
}

export const BagDropdown: React.FC<BagDropdownProps> = ({ title, children, classNameMod }) => {
  return (
    <Dropdown classNameMod={classNameMod}>
      <Dropdown.BagHeader title={title} />
      <Dropdown.BagBody>{children}</Dropdown.BagBody>
    </Dropdown>
  );
};

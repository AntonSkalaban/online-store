import React from 'react';
import { Dropdown } from '../../../../../components/Dropdown/Dropdown';

export const ShareDropdown = () => {
  return (
    <Dropdown classNameMod={'share'}>
      <Dropdown.ShareHeader />
      <Dropdown.ShareBody />
    </Dropdown>
  );
};

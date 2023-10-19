import React from 'react';
import { Dropdown } from 'components';

export const ShareDropdown = () => {
  return (
    <Dropdown classNameMod={'share'}>
      <Dropdown.ShareHeader />
      <Dropdown.ShareBody />
    </Dropdown>
  );
};

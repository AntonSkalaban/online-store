import React, { useContext } from 'react';
import ShareLabel from '../../../../../../assets/svg/share.svg';
import { DropdownContext } from '../../../../../../components/Dropdown/Dropdown';

export const ShareDropdownHeader = () => {
  const { toggleDropdown } = useContext(DropdownContext);

  return (
    <button className="share-bnt" onClick={toggleDropdown}>
      <img src={ShareLabel} />
    </button>
  );
};

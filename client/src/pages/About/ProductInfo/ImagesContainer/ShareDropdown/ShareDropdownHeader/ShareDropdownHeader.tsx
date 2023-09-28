import React, { useContext } from 'react';
import ShareLabel from 'assets/svg/share.svg';
import { DropdownContext } from 'components';

export const ShareDropdownHeader: React.FC<object> = () => {
  const { toggleDropdown } = useContext(DropdownContext);

  return (
    <button className="share-bnt" onClick={toggleDropdown}>
      <img src={ShareLabel} />
    </button>
  );
};

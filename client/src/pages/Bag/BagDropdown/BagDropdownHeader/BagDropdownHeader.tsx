import React, { useContext } from 'react';
import { DropdownContext, DropdownHeaderProps } from 'components';

export const DropdownBagHeader: React.FC<DropdownHeaderProps> = ({ title }) => {
  const { isOpen, toggleDropdown } = useContext(DropdownContext);

  const headerClassName = 'dropdown__header dropdown__header_bag text text_bag';

  return (
    <button className={headerClassName} onClick={toggleDropdown}>
      <span>{title}</span>
      {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
    </button>
  );
};

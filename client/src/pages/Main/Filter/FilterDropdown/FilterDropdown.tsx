import React from 'react';
import { useSelector } from 'react-redux';
import { FormFilterValues } from 'store/slice';
import { getFormFilterValues } from 'store/selectors';
import { useActions } from 'hooks';
import { Dropdown } from 'components';
import './style.css';
interface FilterDropdownProps {
  title: keyof FormFilterValues;
  children: React.ReactNode;
  classNameMod: string;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  children,
  classNameMod,
}) => {
  const { updateGlobalState } = useActions();

  const formFilterValues = useSelector(getFormFilterValues);

  const applyFilter = () => {
    updateGlobalState({
      ...formFilterValues,
    });
  };

  return (
    <Dropdown classNameMod={classNameMod} refCallback={applyFilter}>
      <Dropdown.FilterHeader title={title} />
      <Dropdown.FilterBody title={title}>{children}</Dropdown.FilterBody>
    </Dropdown>
  );
};

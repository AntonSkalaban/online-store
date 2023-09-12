import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { updateGlobalState } from 'store/slice';
import { Dropdown } from 'components';
import './style.css';

interface FilterDropdownProps {
  title: string;
  children: React.ReactNode;
  classNameMod: string;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  children,
  classNameMod,
}) => {
  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);

  const applyFilter = () => {
    dispatch(
      updateGlobalState({
        ...formFilterValues,
        page: '0',
      })
    );
  };

  return (
    <Dropdown classNameMod={classNameMod} refCallback={applyFilter}>
      <Dropdown.FilterHeader title={title} />
      <Dropdown.FilterBody title={title} applyFilter={applyFilter}>
        {children}
      </Dropdown.FilterBody>
    </Dropdown>
  );
};

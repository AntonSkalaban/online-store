import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues, getGlobalFilterValues } from '../../../store/selectors';
import { deleteAllProducts, updateGlobalState } from '../../../store/slice';
import { Dropdown } from '../../Dropdown/Dropdown';
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
  const globalFilterValues = useSelector(getGlobalFilterValues);
  const formFilterValues = useSelector(getFormFilterValues);

  const applyFilter = () => {
    dispatch(deleteAllProducts());
    dispatch(
      updateGlobalState({
        ...formFilterValues,
        searchValue: globalFilterValues.searchValue,
        page: 0,
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

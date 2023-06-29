import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { RootState } from '../../../store/store';
import { options } from './const';

export const SortBlock = () => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);
  const selectValue = formFilterValues.sortBy;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilterFormState({ sortBy: e.target.value });
  };

  return (
    <label>
      Sort by:
      <select name="select" value={selectValue} onChange={handleChange}>
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

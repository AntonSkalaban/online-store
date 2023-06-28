import React from 'react';
import { useDispatch } from 'react-redux';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { options } from './const';

interface SortBlockProps {
  selectValue?: string;
}

export const SortBlock = ({ selectValue }: SortBlockProps) => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilterFormState({ sortBy: e.target.value });
  };

  console.log(selectValue);

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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { RootState } from '../../../store/store';
import { options } from './const';

interface RadioBlockProps {
  title: keyof FormFilterValues;
}

export const RadioBlock = ({ title }: RadioBlockProps) => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);
  const selectValue = formFilterValues[title];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFilterFormState({ [title]: e.target.value });
  };

  return (
    <ul className="filter-list">
      {options.map(({ value, label }) => {
        const isChecked = selectValue === value;
        return (
          <li
            className={`filter-list__item ${isChecked ? 'filter-list__item_checked' : ''}`}
            key={value}
          >
            <label className="filter-list__label">
              <input
                className="filter-list__input"
                type="radio"
                name={title}
                value={value}
                checked={isChecked}
                onChange={handleChange}
              />
              {label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

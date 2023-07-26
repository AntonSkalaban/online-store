import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from '../../../store/selectors/inedx';
import { FormFilterValues, updateFormState } from '../../../store/slice';
import { options } from './const';

interface RadioBlockProps {
  title: keyof FormFilterValues;
}

export const RadioBlock: React.FC<RadioBlockProps> = ({ title }) => {
  const dispatch = useDispatch();

  const selectValue = useSelector(getFormFilterValues)[title];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFormState({ [title]: e.target.value }));
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

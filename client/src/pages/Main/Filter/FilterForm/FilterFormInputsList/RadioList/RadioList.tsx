import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues } from 'store/slice';
import { options } from './const';
import { useActions } from 'hooks';

interface RadioBlockProps {
  title: keyof FormFilterValues;
  classMode?: string;
}

export const RadioBlock: React.FC<RadioBlockProps> = ({ title, classMode = '' }) => {
  const { updateFormState } = useActions();

  const selectValue = useSelector(getFormFilterValues)[title];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormState({ [title]: e.target.value });
  };

  return (
    <ul className={'filter__inputs-list inputs-list' + classMode}>
      {options.map(({ value, label }) => {
        const isChecked = selectValue === value;
        return (
          <li
            className={`filter-list__item ${
              isChecked ? 'filter-list__item_checked' : ''
            } input-list__item`}
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

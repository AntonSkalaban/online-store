import React from 'react';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { firstCharToUC } from '../../../helpers/firstCharToUC';
import './style.css';

export interface CheckboxesListProps {
  blockName: keyof FormFilterValues;
  data: string[];
}

export const CheckboxesList = ({ blockName, data }: CheckboxesListProps) => {
  const dispatch = useDispatch();
  const changeFilterForm = (state: FormFilterValues) => dispatch(updateFormState(state));

  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);
  const checkedCheckboxes = formFilterValues[blockName] ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const itemIndex = checkedCheckboxes.indexOf(name);
    const stateCopy = [...checkedCheckboxes];

    if (itemIndex === -1) {
      stateCopy.push(name);
    } else {
      stateCopy.splice(itemIndex, 1);
    }
    changeFilterForm({ [blockName]: stateCopy });
  };

  return (
    <ul className="filter-list">
      {data.map((name) => {
        const isChecked = checkedCheckboxes.includes(name);
        return (
          <li
            className={`filter-list__item ${isChecked ? 'filter-list__item_checked' : ''}`}
            key={name}
          >
            <label className="filter-list__label">
              <input
                className="filter-list__input"
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={handleChange}
              />
              {firstCharToUC(name)}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

import React, { useCallback, useEffect, useState } from 'react';
import { checkboxAPI } from '../../../services/checkboxService';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { useDispatch } from 'react-redux';
import './style.css';

export interface CheckboxesListProps {
  blockName: keyof FormFilterValues;
  checkedCheckboxes: string[];
}

export const CheckboxesBlock = ({ blockName, checkedCheckboxes }: CheckboxesListProps) => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const { data, isFetching } = checkboxAPI.useGetCheckboxesNameQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checkedCheckboxesCopy = [...checkedCheckboxes];
    const itemIndex = checkedCheckboxes.indexOf(name);

    if (itemIndex === -1) {
      checkedCheckboxesCopy.push(name);
    } else {
      checkedCheckboxesCopy.splice(itemIndex, 1);
    }

    changeFilterFormState({ [blockName]: checkedCheckboxesCopy });
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="checkboxes-block">
      <p className="checkboxes__title">{blockName}</p>
      <ul className="checkboxes__list">
        {data?.map(({ _id, name }) => {
          return (
            <li className="checkboxes__item" key={_id}>
              <label className="checkboxes__label">
                <input
                  type="checkbox"
                  name={name}
                  checked={checkedCheckboxes.includes(name)}
                  onChange={handleChange}
                />
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

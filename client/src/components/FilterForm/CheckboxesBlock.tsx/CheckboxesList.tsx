import React from 'react';
import { FormFilterValues } from '../../../store/FormFilterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './style.css';
import { firstCharToUC } from '../../../helpers/firstCharToUC';

export interface CheckboxesListProps {
  blockName: keyof FormFilterValues;
  data: string[] | undefined;
  isFetching: boolean;
  changeFilterState: (state: FormFilterValues) => void;
}

export const CheckboxesList = ({
  blockName,
  data,
  isFetching,
  changeFilterState,
}: CheckboxesListProps) => {
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);
  const checkedCheckboxes = formFilterValues[blockName] ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checkedCheckboxesCopy = [...checkedCheckboxes];
    const itemIndex = checkedCheckboxes.indexOf(name);

    if (itemIndex === -1) {
      checkedCheckboxesCopy.push(name);
    } else {
      checkedCheckboxesCopy.splice(itemIndex, 1);
    }
    changeFilterState({ [blockName]: checkedCheckboxesCopy });
  };

  return (
    <div className="checkboxes-block filter-block">
      <p className="checkboxes__title">{firstCharToUC(blockName)}</p>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ul className="checkboxes__list">
          {data?.map((name) => {
            return (
              <li className="checkboxes__item" key={name}>
                {/* <input
                  type="checkbox"
                  className="custom-checkbox" 
                  name={name}
                  checked={checkedCheckboxes.includes(name)}
                  onChange={handleChange}
                />
                <label htmlFor={name}>{firstCharToUC(name)}</label> */}
                <label className="checkboxes__label">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    name={name}
                    checked={checkedCheckboxes.includes(name)}
                    onChange={handleChange}
                  />
                  {firstCharToUC(name)}
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

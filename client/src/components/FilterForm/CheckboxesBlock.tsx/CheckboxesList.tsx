import React from 'react';
import { FormFilterValues } from '../../../store/FormFilterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './style.css';

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

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="checkboxes-block">
      <p className="checkboxes__title">{blockName}</p>
      <ul className="checkboxes__list">
        {data?.map((name) => {
          return (
            <li className="checkboxes__item" key={name}>
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

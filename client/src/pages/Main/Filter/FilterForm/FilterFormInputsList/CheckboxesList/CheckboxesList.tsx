import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { withFetchingFilterBlock } from 'hok';
import { useActions } from 'hooks';

export interface CheckboxesListProps {
  blockName: keyof FormFilterValues;
  data: string[];
  classMode?: string;
}

export const CheckboxesList: React.FC<CheckboxesListProps> = ({
  blockName,
  data,
  classMode = '',
}) => {
  const { updateFormState } = useActions();

  const checkedCheckboxes = useSelector(getFormFilterValues)[blockName] ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const itemIndex = checkedCheckboxes.indexOf(name);

    const stateCopy = [...checkedCheckboxes];
    if (itemIndex === -1) {
      stateCopy.push(name);
    } else {
      stateCopy.splice(itemIndex, 1);
    }
    updateFormState({ [blockName]: stateCopy });
  };

  return (
    <ul className={'filter__inputs-list inputs-list ' + classMode}>
      {data.sort().map((name) => {
        const isChecked = checkedCheckboxes.includes(name);
        return (
          <li
            className={`filter-list__item ${
              isChecked ? 'filter-list__item_checked' : ''
            } input-list__item`}
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

export const FilterList = withFetchingFilterBlock(CheckboxesList);

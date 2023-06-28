import React, { useEffect } from 'react';
import './style.css';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { CustomObject } from '../../helpers/CustomObject';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateFormState } from '../../store/FormFilterSlice';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';
import { SortBlock } from './SortBlock/SortBlock';

export interface FilterBlockProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterBlockProps) => {
  const dispatch = useDispatch();
  const changeFormState = (state: GlobalFilterValues) => dispatch(updateFormState(state));

  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  useEffect(() => {
    changeFormState({ category: globalFilterValues.category, sortBy: globalFilterValues.sortBy });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hanldeSubmitClick = () => {
    onSubmit(formFilterValues);
  };

  const handleResetClick = () => {
    const stateCopy = { ...formFilterValues };
    CustomObject.resetAllFields(stateCopy);

    changeFormState(stateCopy);
    onSubmit(stateCopy);
  };

  return (
    <form
      className="filter-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p onClick={handleResetClick}>Reset</p>
      <CheckboxesBlock blockName={'category'} checkedCheckboxes={formFilterValues.category ?? []} />
      <SortBlock selectValue={formFilterValues.sortBy} />
      <button onClick={hanldeSubmitClick}>Apply filter</button>
    </form>
  );
};

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FormFilterValues, updateFormState } from '../../store/FormFilterSlice';
import { updateGlobalState } from '../../store/GlobalFilterSlice';
import { CustomObject } from '../../helpers/CustomObject';
import { Dropdown } from './Dropdown/Dropdown';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { RadioBlock } from './RadioBlock/RadioBlock';
import { DualSliderBlock } from './DualSliderBlock/DualSliderBlock';
import './style.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFormState = (state: FormFilterValues) => dispatch(updateFormState(state));
  const changeGlobalState = (state: FormFilterValues) => dispatch(updateGlobalState(state));

  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  useEffect(() => {
    changeFormState(globalFilterValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);

    changeFormState(emptyState);
    changeGlobalState(emptyState);
  };

  return (
    <div className="filter">
      <p className="filter__reset-btn" onClick={handleResetClick}>
        Reset All
      </p>
      <div className="filter__dropdown-container">
        <Dropdown title="category">
          <CheckboxesBlock title="category" />
        </Dropdown>

        <Dropdown title="brand">
          <CheckboxesBlock title="brand" />
        </Dropdown>

        <Dropdown title="sort">
          <RadioBlock title="sort" />
        </Dropdown>

        <Dropdown title="price">
          <DualSliderBlock />
        </Dropdown>
      </div>
    </div>
  );
};

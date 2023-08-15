import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormState, updateGlobalState } from '../../store/slice';
import { getFormFilterValues, getGlobalFilterValues } from '../../store/selectors';
import { CustomObject } from '../../helpers';
import { Dropdown } from './Dropdown/Dropdown';
import { CheckboxesBlock } from './CheckboxesBlock.tsx/CheckboxesBlock';
import { RadioBlock } from './RadioBlock/RadioBlock';
import { DualSliderBlock } from './DualSliderBlock/DualSliderBlock';
import './style.css';
import { Wrapper } from '../../components/';

export const Filter = () => {
  const dispatch = useDispatch();

  const globalFilterValues = useSelector(getGlobalFilterValues);
  const formFilterValues = useSelector(getFormFilterValues);

  useEffect(() => {
    const filterValues = { ...globalFilterValues };
    delete filterValues.searchValue;
    dispatch(updateFormState(filterValues));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);

    dispatch(updateFormState(emptyState));
    dispatch(updateGlobalState(emptyState));
  };

  return (
    <section className="filter">
      <Wrapper>
        <div className="filter__container">
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
      </Wrapper>
    </section>
  );
};

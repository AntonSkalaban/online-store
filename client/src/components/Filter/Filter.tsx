import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProducts, updateFormState, updateGlobalState } from '../../store/slice';
import { getFormFilterValues, getGlobalFilterValues } from '../../store/selectors';
import { CustomObject } from '../../helpers';
import { Wrapper } from '../../components/';
import { FilterDropdown } from './FilterDropdown/FilterDropdown';
import { CheckboxesBlock } from './CheckboxesBlock/CheckboxesBlock';
import { RadioBlock } from './RadioBlock/RadioBlock';
import { DualSliderBlock } from './DualSliderBlock/DualSliderBlock';
import './style.css';

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
    dispatch(deleteAllProducts());
    dispatch(updateFormState(emptyState));
    dispatch(updateGlobalState({ ...emptyState, page: 0 }));
  };

  return (
    <section className="filter">
      <Wrapper>
        <div className="filter__container">
          <p className="filter__reset-btn" onClick={handleResetClick}>
            Reset All
          </p>

          <div className="filter__dropdown-container">
            <FilterDropdown title="category" classNameMod="filter">
              <CheckboxesBlock title="category" />
            </FilterDropdown>

            <FilterDropdown title="brand" classNameMod="filter">
              <CheckboxesBlock title="brand" />
            </FilterDropdown>

            <FilterDropdown title="sort" classNameMod="filter">
              <RadioBlock title="sort" />
            </FilterDropdown>

            <FilterDropdown title="price" classNameMod="filter">
              <DualSliderBlock />
            </FilterDropdown>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

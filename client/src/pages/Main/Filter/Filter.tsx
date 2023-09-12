import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormState, updateGlobalState } from 'store/slice';
import { getFormFilterValues, getGlobalFilterValues } from 'store/selectors';
import { CustomObject } from 'helpers';
import { FilterDropdown } from './FilterDropdown';
import { FilterList } from './CheckboxesList/CheckboxesList';
import { FilterRange } from './RangeSlider/RangeSlider';
import { RadioBlock } from './RadioList/RadioList';
import { Wrapper } from 'components/UI';
import './style.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const globalFilterValues = useSelector(getGlobalFilterValues);
  const formFilterValues = useSelector(getFormFilterValues);

  useEffect(() => {
    const filterValues = { ...globalFilterValues };
    delete filterValues.searchValue;
    delete filterValues.page;
    dispatch(updateFormState(filterValues));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetAllClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);
    dispatch(updateFormState(emptyState));
    dispatch(updateGlobalState({ ...emptyState, page: '0' }));
  };

  return (
    <section className="filter">
      <Wrapper>
        <div className="filter__container">
          <p className="filter__reset-btn" onClick={handleResetAllClick}>
            Reset All
          </p>

          <div className="filter__dropdown-container">
            <FilterDropdown title="category" classNameMod="filter">
              <FilterList blockName={'category'} />
            </FilterDropdown>

            <FilterDropdown title="brand" classNameMod="filter">
              <FilterList blockName={'brand'} />
            </FilterDropdown>

            <FilterDropdown title="sort" classNameMod="filter">
              <RadioBlock title="sort" />
            </FilterDropdown>

            <FilterDropdown title="price" classNameMod="filter">
              <FilterRange
                blockName={'price'}
                additionalUrlParams={{ sort: 'discountPrice-ASC' }}
              />
            </FilterDropdown>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

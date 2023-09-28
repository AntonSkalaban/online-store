import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initOpenPage, updateFormState, updateGlobalState } from 'store/slice';
import { getFormFilterValues, getGlobalFilterValues } from 'store/selectors';
import { CustomObject } from 'helpers';
import { LaptopFilter } from './LaptopFilter/LaptopFilter';
import { MobileFilter } from './MobileFilter/MobileFilter';
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
    dispatch(initOpenPage(0));
  };

  return (
    <section className="filter">
      <Wrapper>
        <div className="filter__container">
          <p className="filter__reset-btn" onClick={handleResetAllClick}>
            Reset All
          </p>

          <LaptopFilter />
          <MobileFilter />
        </div>
      </Wrapper>
    </section>
  );
};

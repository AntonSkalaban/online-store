import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { useActions } from 'hooks';
import { LaptopFilter } from './LaptopFilter/LaptopFilter';
import { MobileFilter } from './MobileFilter/MobileFilter';
import { Wrapper } from 'components/UI';
import './style.css';

export const Filter = () => {
  const { initFormState, resetForm } = useActions();

  const globalFilterValues = useSelector(getGlobalFilterValues);

  useEffect(() => {
    initFormState(globalFilterValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetAllClick = () => {
    resetForm();
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

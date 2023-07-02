import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateFormState } from '../../store/FormFilterSlice';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';
import { CustomObject } from '../../helpers/CustomObject';
import { SortBlock } from './SortBlock/SortBlock';
import { CategoryFilter } from './CheckboxesBlock.tsx/CategoryFilter';
import { BrandFilter } from './CheckboxesBlock.tsx/BrandFilter';
import { FilterButton } from '../../components/UI/FilterButton/FilterButton';
import './style.css';
import { DualRangeSlider } from './DualSliderBlock/DualSliderBlock';
import { FilterBlock } from './FilterBlock/FilterBlock';

export interface FilterBlockProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterBlockProps) => {
  const dispatch = useDispatch();
  const changeFormState = (state: GlobalFilterValues) => dispatch(updateFormState(state));

  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  useEffect(() => {
    changeFormState({
      category: globalFilterValues.category,
      brand: globalFilterValues.brand,
      sortBy: globalFilterValues.sortBy,
    });
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
      <p className="filter-form__reset" onClick={handleResetClick}>
        Reset All
      </p>

      <FilterBlock title="Category">
        <CategoryFilter />
      </FilterBlock>

      <FilterBlock title="Brand">
        <BrandFilter />
      </FilterBlock>

      <FilterBlock title="Price">
        <DualRangeSlider />
      </FilterBlock>

      <SortBlock />

      <FilterButton label={'Apply filter'} hanldeClick={hanldeSubmitClick} />
    </form>
  );
};

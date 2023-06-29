import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { categoryAPI } from '../../../services/categoryService';
import { CheckboxesList } from './CheckboxesList';
import { useDispatch } from 'react-redux';
import React from 'react';

export const CategoryFilter = () => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const { data, isFetching } = categoryAPI.useGetCategoryNameQuery();

  return (
    <CheckboxesList
      blockName={'category'}
      data={data}
      isFetching={isFetching}
      changeFilterState={changeFilterFormState}
    />
  );
};

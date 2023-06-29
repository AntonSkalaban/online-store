import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { productAPI } from '../../../services/productService';
import { CheckboxesList } from './CheckboxesList';
import { useDispatch } from 'react-redux';
import React from 'react';

export const BrandFilter = () => {
  const dispatch = useDispatch();
  const changeFilterFormState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const { data, isFetching } = productAPI.useGetProductBrandsQuery();

  return (
    <CheckboxesList
      blockName={'brand'}
      data={data}
      isFetching={isFetching}
      changeFilterState={changeFilterFormState}
    />
  );
};

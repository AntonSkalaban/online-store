import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { FormFilterValues } from '../../../store/FormFilterSlice';
import { productAPI } from '../../../services/productService';
import { CheckboxesList } from './CheckboxesList';
import { Product } from '../../../types';

interface CheckboxesBlockProps {
  title: keyof FormFilterValues;
}

export const CheckboxesBlock = ({ title }: CheckboxesBlockProps) => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
    ...globalFilterValues,
    [title]: [],
  });

  const names = [
    ...new Set(data?.map((product) => product[title as keyof Product])),
  ].sort() as string[];

  if (isFetching) return <div>Loading...</div>;

  return <CheckboxesList blockName={title} data={names} />;
};

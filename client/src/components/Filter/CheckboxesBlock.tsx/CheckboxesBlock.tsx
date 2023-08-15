import React from 'react';
import { useSelector } from 'react-redux';
import { FormFilterValues } from '../../../store/slice';
import { getGlobalFilterValues } from '../../../store/selectors';
import { productAPI } from '../../../services/api';
import { Product } from '../../../types';
import { CheckboxesList } from './CheckboxesList';
interface CheckboxesBlockProps {
  title: keyof FormFilterValues;
}

export const CheckboxesBlock = ({ title }: CheckboxesBlockProps) => {
  const globalFilterValues = useSelector(getGlobalFilterValues);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
    ...globalFilterValues,
    [title]: [],
  });

  const availableNames = [
    ...new Set(data?.products.map((product) => product[title as keyof Product])),
  ].sort() as string[];

  if (isFetching) return <div>Loading...</div>;

  return <CheckboxesList blockName={title} data={availableNames} />;
};

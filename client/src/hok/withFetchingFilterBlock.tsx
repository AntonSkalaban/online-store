import React from 'react';
import { Product } from '../types';
import { productAPI } from '../services';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from '../store/selectors';
import { FormFilterValues } from '../store/slice';
import { LoadingSpinner } from '../components/UI/LodaingSpinner/LoadingSpinner';

interface withFetchingFilterBlockProps {
  blockName: keyof FormFilterValues;
  additionalUrlParams?: FormFilterValues;
}

export const withFetchingFilterBlock = (
  Component: React.FC<withFetchingFilterBlockProps & { data: string[] }>
) => {
  return (props: withFetchingFilterBlockProps) => {
    const globalFilterValues = useSelector(getGlobalFilterValues);

    const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
      ...globalFilterValues,
      page: '',
      [props.blockName]: [],
      ...(props.additionalUrlParams && props.additionalUrlParams),
    });

    const availableNames = [
      ...new Set(data?.products.map((product) => product[props.blockName as keyof Product])),
    ] as string[];

    if (isFetching) return <LoadingSpinner />;

    return <Component data={availableNames} {...props} />;
  };
};

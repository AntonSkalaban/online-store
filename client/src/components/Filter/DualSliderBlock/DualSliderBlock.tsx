import React from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from '../../../store/selectors';
import { productAPI } from '../../../services/api';
import { DualRangeSlider } from './DualRangeSlider';
import './style.css';

export const DualSliderBlock = () => {
  const globalFilterValues = useSelector(getGlobalFilterValues);
  const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
    ...globalFilterValues,
    price: [],
    sort: 'discountPrice-ASC',
  });

  const availablePrices = [...new Set(data?.products.map((i) => String(i.discountPrice)))];

  if (isFetching) return <div>Loading...</div>;

  return <DualRangeSlider data={availablePrices} />;
};

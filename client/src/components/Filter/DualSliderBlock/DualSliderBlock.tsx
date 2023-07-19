import React from 'react';
import { productAPI } from '../../../services/productService';
import { RootState } from '../../../store/store';
import { DualRangeSlider } from './DualRangeSlider';
import { useSelector } from 'react-redux';
import './style.css';

export const DualSliderBlock = () => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
    ...globalFilterValues,
    price: [],
    sort: 'discountPrice-ASC',
  });

  const prices = [...new Set(data?.map((i) => String(i.discountPrice)))];

  if (isFetching) return <div>Loading...</div>;

  return <DualRangeSlider data={prices} />;
};

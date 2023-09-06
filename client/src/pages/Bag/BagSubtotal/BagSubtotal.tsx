import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemsTotalPrice } from '../../../store/selectors';
import { BagSection } from '../BagSection/BagSection';

export const BagSubtotal = () => {
  const bagItemsTotalSum = useSelector(getBagItemsTotalPrice);

  return <BagSection title={`sub-total $${bagItemsTotalSum}`} />;
};

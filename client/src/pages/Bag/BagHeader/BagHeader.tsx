import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemsTotalQuantity } from '../../../store/selectors';
import { BagSection } from '../BagSection/BagSection';

export const BagHeader = () => {
  const bagItemsTotalQuantity = useSelector(getBagItemsTotalQuantity);

  return <BagSection title={'My Bag'} subtitle={`${bagItemsTotalQuantity} items`} />;
};

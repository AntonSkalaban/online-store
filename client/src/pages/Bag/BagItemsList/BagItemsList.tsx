import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItems } from '../../../store/selectors';
import { BagSection } from '../BagSection/BagSection';
import { BagItemCard } from './BagItemCard/BagItemCard';

export const BagItemsList = () => {
  const bagItems = useSelector(getBagItems);

  return (
    <BagSection>
      {bagItems.map((item) => {
        return <BagItemCard key={item._id} product={item} />;
      })}
    </BagSection>
  );
};

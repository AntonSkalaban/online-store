import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getBagItems } from 'store/selectors';
import { BagItemCard } from './BagItemCard/BagItemCard';
import { WhiteSection } from 'components/UI';
import { LocalStorage } from 'services/localSorage';

export const BagItemsList = () => {
  const bagItems = useSelector(getBagItems);

  useEffect(() => {
    return LocalStorage.setArray('bagItems', bagItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WhiteSection>
      {bagItems.map((item) => {
        return <BagItemCard key={item._id} product={item} />;
      })}
    </WhiteSection>
  );
};

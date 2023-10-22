import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getResentlyVewedItems } from 'store/selectors';
import { LocalStorage } from 'services';
import { useActions } from 'hooks';
import { FetchingResentlyViewedProduct } from './ResentlyViewedProduct/ResentlyViewedProduct';
import { AboutSection } from '../AboutSection';
import { Carousel } from 'components';

interface ResentlyViewedProps {
  productId: string;
}

export const ResentlyViewed: React.FC<ResentlyViewedProps> = ({ productId }) => {
  const { addResentlyViewedItem } = useActions();
  const productIds = useSelector(getResentlyVewedItems);

  useEffect(() => {
    return () => {
      addResentlyViewedItem(productId);
      LocalStorage.setArray<string>('recentlyViewed', productIds);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!productIds.length) return null;
  return (
    <AboutSection title="Resently viewed">
      <Carousel>
        {productIds.map((id) => {
          return <FetchingResentlyViewedProduct key={id} productId={id} />;
        })}
      </Carousel>
    </AboutSection>
  );
};

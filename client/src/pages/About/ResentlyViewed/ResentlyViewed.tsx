/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResentlyVewedItems } from '../../../store/selectors';
import { addResentlyViewedItem } from '../../../store/slice';
import { LocalStorage } from '../../../services';
import { ResentlyViewedProduct } from './ResentlyViewedProduct/ResentlyViewedProduct';
import { Carousel } from '../../../components';
import { AboutSection } from '../AboutSection';

interface ResentlyViewedProps {
  productId: string;
}

export const ResentlyViewed: React.FC<ResentlyViewedProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const productIds = useSelector(getResentlyVewedItems);

  useEffect(() => {
    return () => {
      dispatch(addResentlyViewedItem(productId));
    };
  }, [productId]);

  useEffect(() => {
    return () => LocalStorage.setArray<string>('recentlyViewed', productIds);
  }, [productIds]);

  if (!productIds.length) return null;

  return (
    <AboutSection title="Resently viewed">
      <Carousel>
        {productIds.map((id) => {
          return <ResentlyViewedProduct key={id} productId={id} />;
        })}
      </Carousel>
    </AboutSection>
  );
};
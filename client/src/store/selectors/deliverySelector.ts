import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export const getDeliveryName = (state: RootState) => state.delivery.delivery.name;
export const getDeliveryPrice = (state: RootState) => state.delivery.delivery.price;

export const getDeliveryLabel = createSelector(
  [getDeliveryName, getDeliveryPrice],
  (name, price) => {
    return `${name} (${price ? '$' + price : 'free'})`;
  }
);

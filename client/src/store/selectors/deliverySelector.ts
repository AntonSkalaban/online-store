import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const getDeliveryName = (state: RootState) => state.delivery.delivery.name;
export const getDeliveryPrice = (state: RootState) => state.delivery.delivery.price;

export const getSelectDeliveryLabel = createSelector(
  [getDeliveryName, getDeliveryPrice],
  (name, price) => {
    return `${name} (${price ? '$' + price : 'free'})`;
  }
);

export const getDeliveryLabel = (name: string, price: number) => {
  return `${name} (${price ? '$' + price : 'free'})`;
};

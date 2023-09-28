import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const getCheckoutItems = (state: RootState) => state.checkoutItems.items;

export const getCheckoutItemsTotalPrice = createSelector(getCheckoutItems, (items) => {
  return items.reduce((acc, val) => acc + (val.discountPrice || val.price) * val.quantity, 0);
});

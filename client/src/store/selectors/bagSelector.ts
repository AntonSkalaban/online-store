import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export const getBagItems = (state: RootState) => state.BagItems.items;

export const getBagItemsQuantity = createSelector(getBagItems, (items) =>
  items.reduce((acc, val) => acc + val.quantity, 0)
);

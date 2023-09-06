import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { CustomArray } from '../../helpers';
import { BagItem } from '../../types';

export const getBagItems = (state: RootState) => state.BagItems.products;

export const getBagItemKeys = createSelector(
  [getBagItems, (_state, key: keyof BagItem) => key],
  (items, key) => {
    return CustomArray.removeDublicateKeys<BagItem>(items, key);
  }
);
export const getBagItemQuantity = createSelector(
  [getBagItems, (_state, id: string) => id],
  (items, id) => {
    return items.find((item) => item._id === id && !item.isDeleted)?.quantity;
  }
);

export const getBagItemsTotalQuantity = createSelector(getBagItems, (items) => {
  return items.reduce((acc, val) => acc + (!val.isDeleted ? val.quantity : 0), 0);
});

export const getBagItemsTotalPrice = createSelector(getBagItems, (items) => {
  return items.reduce(
    (acc, val) => acc + (!val.isDeleted ? (val.discountPrice || val.price) * val.quantity : 0),
    0
  );
});

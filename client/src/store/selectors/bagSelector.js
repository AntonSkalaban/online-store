import { createSelector } from '@reduxjs/toolkit';
import { CustomArray } from 'helpers';
export const getBagItems = (state) => state.BagItems.products;
export const getBagItemKeys = createSelector([getBagItems, (_state, key) => key], (items, key) => {
    return CustomArray.removeDublicateKeys(items, key);
});
export const getBagItemQuantity = createSelector([getBagItems, (_state, id) => id], (items, id) => {
    return items.find((item) => item._id === id && !item.isDeleted)?.quantity;
});
export const getBagItemsTotalQuantity = createSelector(getBagItems, (items) => {
    return items.reduce((acc, val) => acc + (!val.isDeleted ? val.quantity : 0), 0);
});
export const getBagItemsTotalPrice = createSelector(getBagItems, (items) => {
    return +items
        .reduce((acc, val) => acc + (!val.isDeleted ? (val.discountPrice || val.price) * val.quantity : 0), 0)
        .toFixed(2);
});

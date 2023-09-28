import { createSelector } from '@reduxjs/toolkit';
export const getCheckoutItems = (state) => state.checkoutItems.items;
export const getCheckoutItemsTotalPrice = createSelector(getCheckoutItems, (items) => {
    return items.reduce((acc, val) => acc + (val.discountPrice || val.price) * val.quantity, 0);
});

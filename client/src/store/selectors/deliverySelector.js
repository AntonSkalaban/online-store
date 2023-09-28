import { createSelector } from '@reduxjs/toolkit';
export const getDeliveryName = (state) => state.delivery.delivery.name;
export const getDeliveryPrice = (state) => state.delivery.delivery.price;
export const getSelectDeliveryLabel = createSelector([getDeliveryName, getDeliveryPrice], (name, price) => {
    return `${name} (${price ? '$' + price : 'free'})`;
});
export const getDeliveryLabel = (name, price) => {
    return `${name} (${price ? '$' + price : 'free'})`;
};

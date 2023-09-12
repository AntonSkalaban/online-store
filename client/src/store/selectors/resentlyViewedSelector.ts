import { RootState } from 'store';

export const getResentlyVewedItems = (state: RootState) => state.ResentlyVewedItems.productsIds;

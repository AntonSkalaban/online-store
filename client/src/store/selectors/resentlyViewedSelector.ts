import { RootState } from '../../store/store';

export const getResentlyVewedItems = (state: RootState) => state.ResentlyVewedItems.productsIds;

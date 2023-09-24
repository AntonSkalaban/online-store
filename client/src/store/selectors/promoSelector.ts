import { RootState } from 'store/store';

export const getIsPromoApplied = (state: RootState) => state.promo.isApplied;

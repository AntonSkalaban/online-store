import { RootState } from 'store/store';

export const getAddressStatus = (state: RootState) => state.address.isEntered;

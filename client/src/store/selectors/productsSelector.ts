import { RootState } from '../../store/store';

export const getProducst = (state: RootState) => state.products.items;

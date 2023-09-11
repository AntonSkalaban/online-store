import { RootState } from '../../store/store';

export const getProducst = (state: RootState) => {
  return state.products.items;
};

import { RootState } from 'store';

export const getProducst = (state: RootState) => {
  return state.products.items;
};

import { RootState } from 'store';

export const getOpenPages = (state: RootState) => state.openPages.openPages;
export const getFirstOpenPage = (state: RootState) => state.openPages.openPages[0];
export const getLastOpenPage = (state: RootState) =>
  state.openPages.openPages[state.openPages.openPages.length - 1];

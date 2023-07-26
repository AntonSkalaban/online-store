// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const getGlobalFilterValues = (state: RootState) => state.globalFilterValues;

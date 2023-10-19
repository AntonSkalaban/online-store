import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  initOpenPage,
  initFormState,
  resetFilterValue,
  updateFormState,
  resetForm,
  updateGlobalState,
  updateSearchBarValue,
} from 'store/slice';

const actions = {
  updateFormState,
  resetForm,
  resetFilterValue,
  updateGlobalState,
  updateSearchBarValue,
  initOpenPage,
  initFormState,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

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
  addBagItem,
  deleteBagItem,
  changeBagItemQuantity,
  changeDelivery,
  changeBagItemStoreState,
  addResentlyViewedItem,
  checkoutOneItem,
  checkoutAllItems,
  enterAddress,
  deletePurchasedItems,
  applyPromo,
} from 'store/slice';

const actions = {
  updateFormState,
  resetForm,
  resetFilterValue,
  updateGlobalState,
  updateSearchBarValue,
  initOpenPage,
  initFormState,
  addBagItem,
  deleteBagItem,
  changeBagItemQuantity,
  changeDelivery,
  changeBagItemStoreState,
  addResentlyViewedItem,
  checkoutOneItem,
  checkoutAllItems,
  enterAddress,
  deletePurchasedItems,
  applyPromo,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

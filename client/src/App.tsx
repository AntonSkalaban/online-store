import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeDelivery, initBagState, initResentlyViewedState } from './store/slice';
import { LocalStorage } from './services';
import { delivery } from './const';
import { BagItem } from './types/types';
import { Main, About, Bag, NotFound } from './pages';
import { Layout } from './components/Layout';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initResentlyViewedState(LocalStorage.getArray<string>('recentlyViewed')));
    dispatch(initBagState(LocalStorage.getArray<BagItem>('bagItems')));
    dispatch(changeDelivery(delivery[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about/:id" element={<About />} />
        <Route path="bag" element={<Bag />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

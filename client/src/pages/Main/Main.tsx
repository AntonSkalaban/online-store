import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { PageURL } from 'helpers';
import { Filter } from './Filter';
import { ProductsList } from './ProductsList';
import './style.css';

export const Main = () => {
  const globalFilterValues = useSelector(getGlobalFilterValues);

  useEffect(() => {
    PageURL.showNewUrl(globalFilterValues);
  }, [globalFilterValues]);

  return (
    <div className="page">
      <main className="main">
        <Filter />
        <ProductsList />
      </main>
    </div>
  );
};

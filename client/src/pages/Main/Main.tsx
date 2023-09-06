import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from '../../store/selectors';
import { CustomObject, PageURL } from '../../helpers';
import { Filter, ProductsList } from '../../components';
import './style.css';

export const Main = () => {
  const globalFilterValues = useSelector(getGlobalFilterValues);

  useEffect(() => {
    const existGlobalValues = CustomObject.removeEmptyField(globalFilterValues);
    const newUrlParams = new URLSearchParams(existGlobalValues as Record<string, string>);

    PageURL.update(newUrlParams.toString());
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

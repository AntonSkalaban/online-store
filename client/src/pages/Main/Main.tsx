import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { productAPI } from '../../services/productService';
import { PageURL } from '../../helpers/PageURL';
import { CustomObject } from '../../helpers/CustomObject';
import { Wrapper, Filter, ProductsList, SearchBar } from '../../components';
import './style.css';
import { getGlobalFilterValues } from '../../store/selectors/inedx';

export const Main = () => {
  const globalFilterValues = useSelector(getGlobalFilterValues);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    const existGlobalValues = CustomObject.removeEmptyField(globalFilterValues);
    const newUrlParams = new URLSearchParams(existGlobalValues as Record<string, string>);

    PageURL.update(newUrlParams.toString());
  }, [globalFilterValues]);

  return (
    <Wrapper>
      <SearchBar />
      <main className="main">
        <Filter />
        <ProductsList data={data} isFetching={isFetching} />
      </main>
    </Wrapper>
  );
};

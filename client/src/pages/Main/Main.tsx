import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { productAPI } from '../../services/productService';
import { PageURL } from '../../helpers/PageURL';
import { CustomObject } from '../../helpers/CustomObject';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Filter } from '../../components/Filter/Filter';
import './style.css';

export const Main = () => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    const existGlobalValues = CustomObject.removeEmptyField(globalFilterValues);
    const newUrlParams = new URLSearchParams(existGlobalValues as Record<string, string>);

    PageURL.update(newUrlParams.toString());
  }, [globalFilterValues]);

  return (
    <Wrapper>
      <main className="main">
        <SearchBar />
        <Filter />
        <ProductsList data={data} isFetching={isFetching} />
      </main>
    </Wrapper>
  );
};

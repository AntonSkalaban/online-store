import React, { useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import { PageURL } from '../../helpers/PageURL';
import { SearchParams } from '../../helpers/SearchParams';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalFilterValues, updateGlobalState } from '../../store/GlobalFilterSlice';
import { productAPI } from '../../services/productService';
import { CustomObject } from '../../helpers/CustomObject';
import './style.css';

export const Main = () => {
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);
  const existFilterValues = CustomObject.copyWithExistField(globalFilterValues);
  const dispatch = useDispatch();

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(existFilterValues);

  useEffect(() => {
    const newUrlParams = SearchParams.createFromFilterValues(globalFilterValues).toString();
    PageURL.update(newUrlParams);
  }, [globalFilterValues]);

  const changeFilterValue = (values: GlobalFilterValues) => {
    dispatch(updateGlobalState(values));
  };

  return (
    <main className="main">
      <FilterForm onSubmit={changeFilterValue} />
      <div className="main__main">
        <SearchBar onSubmit={changeFilterValue} />
        <ProductsList data={data} isLoading={isFetching} />
      </div>
    </main>
  );
};

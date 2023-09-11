import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalFilterValues, getProducst } from '../../../store/selectors';
import {
  addNextProducts,
  addPrevProducts,
  deleteAllProducts,
  initProducts,
  updateGlobalState,
} from '../../../store/slice';
import { productAPI } from '../../../services';
import { CardsList, Wrapper } from '../../../components';
import { PaginationButton } from '../../../components/UI/PaginationButton';
import { LoadingSpinner } from '../../../components/UI/LodaingSpinner/LoadingSpinner';
import './style.css';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProducst);

  const globalFilterValues = useSelector(getGlobalFilterValues);
  const currPage = +(globalFilterValues.page || 0);

  const [openPages, setOpenPages] = useState([] as number[]);
  const firstOpenPage = openPages[0];
  const lastOpenPage = openPages[openPages.length - 1];

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    setOpenPages([currPage]);
    return () => {
      dispatch(deleteAllProducts());
      dispatch(productAPI.util.resetApiState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFetching || !data?.products) return;

    if (openPages.length === 1 || currPage === 0) {
      setOpenPages([currPage]);
      dispatch(initProducts(data?.products));
    } else if (currPage === firstOpenPage) {
      dispatch(addPrevProducts(data?.products));
    } else {
      dispatch(addNextProducts(data?.products));
    }
  }, [currPage, firstOpenPage, openPages.length, data?.products, isFetching, dispatch]);

  const loadPrevPage = () => {
    setOpenPages((prev) => [firstOpenPage - 1, ...prev]);
    dispatch(updateGlobalState({ page: String(firstOpenPage - 1) }));
  };

  const loadNextPage = () => {
    setOpenPages((prev) => [...prev, lastOpenPage + 1]);
    dispatch(updateGlobalState({ page: String(lastOpenPage + 1) }));
  };

  if (!data || !data?.searchCount || !data?.products?.length) {
    return isFetching ? <LoadingSpinner /> : <div>Not found</div>;
  }

  const productsPerPage = 5;
  const viewedProducts = lastOpenPage * productsPerPage + data?.products.length;

  const isFirstPage = firstOpenPage === 0;
  const isLastPage = productsPerPage * (lastOpenPage + 1) >= data.searchCount;

  return (
    <section className="products-list">
      <Wrapper>
        <p className="products-list__text">{data?.searchCount} prdoducts found </p>

        <div className="pagination-wrapper">
          {firstOpenPage === currPage && isFetching ? (
            <LoadingSpinner />
          ) : (
            !isFirstPage && <PaginationButton label={'Load prev'} hanldeClick={loadPrevPage} />
          )}
        </div>

        <CardsList products={products} cardSize="big" />

        <p className="products-list__text">
          You&apos;ve viewed {!isFetching && currPage === 0 ? products.length : viewedProducts} of{' '}
          {data?.searchCount} products
        </p>

        <div className="pagination-wrapper">
          {lastOpenPage === currPage && isFetching ? (
            <LoadingSpinner />
          ) : (
            !isLastPage && <PaginationButton label={'Load more'} hanldeClick={loadNextPage} />
          )}
        </div>
      </Wrapper>
    </section>
  );
};

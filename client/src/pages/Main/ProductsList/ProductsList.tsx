import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFirstOpenPage,
  getGlobalFilterValues,
  getLastOpenPage,
  getOpenPages,
  getProducst,
} from 'store/selectors';
import {
  addNextOpenPage,
  addNextProducts,
  addPrevOpenPage,
  addPrevProducts,
  deleteAllProducts,
  initOpenPage,
  initProducts,
  updateGlobalState,
} from 'store/slice';
import { productAPI } from 'services';
import { CardsList } from 'components';
import { Wrapper, LoadingSpinner, PaginationButton } from 'components/UI';
import './style.css';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProducst);

  const globalFilterValues = useSelector(getGlobalFilterValues);
  const currPage = +(globalFilterValues.page || 0);

  const openPages = useSelector(getOpenPages);
  const firstOpenPage = useSelector(getFirstOpenPage);
  const lastOpenPage = useSelector(getLastOpenPage);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    dispatch(initOpenPage(currPage));
    return () => {
      dispatch(deleteAllProducts());
      dispatch(productAPI.util.resetApiState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFetching || !data?.products) return;

    if (openPages.length === 1) {
      dispatch(initProducts(data?.products));
    } else if (currPage === firstOpenPage) {
      dispatch(addPrevProducts(data?.products));
    } else {
      dispatch(addNextProducts(data?.products));
    }
  }, [currPage, firstOpenPage, openPages.length, data?.products, isFetching, dispatch]);

  const loadPrevPage = () => {
    dispatch(addPrevOpenPage());
    dispatch(updateGlobalState({ page: String(firstOpenPage - 1) }));
  };

  const loadNextPage = () => {
    dispatch(addNextOpenPage());
    dispatch(updateGlobalState({ page: String(lastOpenPage + 1) }));
  };

  if (!data || !data?.searchCount || !data?.products?.length) {
    return isFetching ? <LoadingSpinner /> : <div>Not found</div>;
  }

  const productsPerPage = 20;
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

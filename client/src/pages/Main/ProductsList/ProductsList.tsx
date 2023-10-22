import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFirstOpenPage, getGlobalFilterValues, getLastOpenPage } from 'store/selectors';
import { productAPI } from 'services';
import { useActions } from 'hooks';
import { CardsList } from 'components';
import { Wrapper, LoadingSpinner, PaginationButton } from 'components/UI';
import './style.css';

export const ProductsList = () => {
  const { initOpenPage, updateGlobalState } = useActions();
  const globalFilterValues = useSelector(getGlobalFilterValues);
  const currPage = +(globalFilterValues.page || 0);

  const firstOpenPage = useSelector(getFirstOpenPage);
  const lastOpenPage = useSelector(getLastOpenPage);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    initOpenPage(currPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPrevPage = () => {
    updateGlobalState({ page: String(firstOpenPage - 1) });
  };

  const loadNextPage = () => {
    updateGlobalState({ page: String(lastOpenPage + 1) });
  };

  if (!data || !data?.searchCount || !data?.products?.length) {
    return isFetching ? <LoadingSpinner /> : <div>Not found</div>;
  }

  const productsPerPage = 20;

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

        <CardsList products={data.products} cardSize="big" />

        <p className="products-list__text">
          You&apos;ve viewed {!isFetching && data.products.length} of {data?.searchCount} products
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

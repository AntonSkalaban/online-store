import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalFilterValues, getProducst } from '../../store/selectors';
import { addNextProducts, addPrevProducts, updateGlobalState } from '../../store/slice';
import { productAPI } from '../../services';
import { CardsList, Wrapper } from '../../components';
import { PaginationButton } from '../../components/UI/PaginationButton';
import './style.css';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const globalFilterValues = useSelector(getGlobalFilterValues);

  const products = useSelector(getProducst);

  const currPage = globalFilterValues.page ?? 0;
  const [prevPage, setPrevPage] = useState(currPage);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    if (currPage === prevPage && products.length) return;
    if (data?.products && !isFetching) {
      if (currPage >= prevPage) {
        dispatch(addNextProducts(data?.products));
      } else {
        dispatch(addPrevProducts(data?.products));
      }
    }
  }, [currPage, prevPage, isFetching, data?.products, dispatch, products.length]);

  const hanldeLoadPrev = () => {
    setPrevPage(currPage);
    dispatch(updateGlobalState({ page: currPage - 1 }));
  };

  const hanldeLoadMore = () => {
    setPrevPage(currPage);
    dispatch(updateGlobalState({ page: currPage + 1 }));
  };

  if (!data || !data?.searchCount || !data?.products?.length) return <div>Not found</div>;

  const productsPerPage = 20;
  const viewedProducts = currPage * productsPerPage + data?.products.length;

  const isFirstPage = products.length >= viewedProducts;
  const isLastPage = products.length === data.searchCount || viewedProducts === data.searchCount;

  console.log(products.length, data.searchCount, viewedProducts);

  return (
    <section className="products-list">
      <Wrapper>
        <p className="products-list__text">{data?.searchCount} prdoducts found </p>
        {!isFirstPage && <PaginationButton label="Load previous" hanldeClick={hanldeLoadPrev} />}
        {!isFirstPage && isFetching && <div>Loading...</div>}

        <CardsList products={products} cardSize="big" />

        {!isFirstPage && isFetching && <div>Loading...</div>}
        <p className="products-list__text">
          You&apos;ve viewed {!isFetching && currPage === 0 ? products.length : viewedProducts} of{' '}
          {data?.searchCount} products
        </p>
        {!isLastPage && <PaginationButton label="Load more" hanldeClick={hanldeLoadMore} />}
      </Wrapper>
    </section>
  );
};

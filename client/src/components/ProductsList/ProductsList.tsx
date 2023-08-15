import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalFilterValues } from '../../store/selectors';
import { productAPI } from '../../services';
import { CardsList, Wrapper } from '../../components';
import './style.css';
import { Product } from '../../types';
import { updateGlobalState } from '../../store/slice';
import { PaginationButton } from '../../components/UI/PaginationButton';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const globalFilterValues = useSelector(getGlobalFilterValues);

  const currPage = +(globalFilterValues.page || 0);
  const [prevPage, setPrevPage] = useState(currPage);
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isFetching } = productAPI.useGetFilterdProductsQuery(globalFilterValues);

  useEffect(() => {
    if (data?.products && !isFetching) {
      if (currPage >= prevPage) {
        return setProducts((prev) => [...prev, ...data?.products]);
      }
      return setProducts((prev) => [...data?.products, ...prev]);
    }
  }, [currPage, prevPage, isFetching, data?.products]);

  const hanldeLoadPrev = () => {
    setPrevPage(currPage);
    dispatch(updateGlobalState({ page: String(currPage - 1) }));
  };

  const hanldeLoadMore = () => {
    setPrevPage(currPage);
    dispatch(updateGlobalState({ page: String(currPage + 1) }));
  };

  if (!data || !data?.searchCount || !data?.products?.length) return <div>Not found</div>;

  const productsPerPage = 20;
  const viewedProducts = currPage * productsPerPage + data?.products.length;

  const isFirstPage = products.length >= viewedProducts;
  const isLastPage = products.length === data.searchCount || viewedProducts === data.searchCount;

  console.log(products.length, data.searchCount, viewedProducts);

  return (
    <section className="products-list">
      <p className="products-list__text">{data?.searchCount} prdoducts found </p>
      {!isFirstPage && <PaginationButton label="Load previous" hanldeClick={hanldeLoadPrev} />}
      {!isFirstPage && isFetching && <div>Loading...</div>}

      <Wrapper>
        <CardsList products={products} cardSize="big" />
      </Wrapper>

      {!isFirstPage && isFetching && <div>Loading...</div>}
      <p className="products-list__text">
        You&apos;ve viewed {!isFetching && currPage === 0 ? products.length : viewedProducts} of{' '}
        {data?.searchCount} products
      </p>
      {!isLastPage && <PaginationButton label="Load more" hanldeClick={hanldeLoadMore} />}
    </section>
  );
};

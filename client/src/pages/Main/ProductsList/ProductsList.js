import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstOpenPage, getGlobalFilterValues, getLastOpenPage, getOpenPages, getProducst, } from 'store/selectors';
import { addNextOpenPage, addNextProducts, addPrevOpenPage, addPrevProducts, deleteAllProducts, initOpenPage, initProducts, updateGlobalState, } from 'store/slice';
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
        if (isFetching || !data?.products)
            return;
        if (openPages.length === 1) {
            dispatch(initProducts(data?.products));
        }
        else if (currPage === firstOpenPage) {
            dispatch(addPrevProducts(data?.products));
        }
        else {
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
        return isFetching ? React.createElement(LoadingSpinner, null) : React.createElement("div", null, "Not found");
    }
    const productsPerPage = 20;
    const viewedProducts = lastOpenPage * productsPerPage + data?.products.length;
    const isFirstPage = firstOpenPage === 0;
    const isLastPage = productsPerPage * (lastOpenPage + 1) >= data.searchCount;
    return (React.createElement("section", { className: "products-list" },
        React.createElement(Wrapper, null,
            React.createElement("p", { className: "products-list__text" },
                data?.searchCount,
                " prdoducts found "),
            React.createElement("div", { className: "pagination-wrapper" }, firstOpenPage === currPage && isFetching ? (React.createElement(LoadingSpinner, null)) : (!isFirstPage && React.createElement(PaginationButton, { label: 'Load prev', hanldeClick: loadPrevPage }))),
            React.createElement(CardsList, { products: products, cardSize: "big" }),
            React.createElement("p", { className: "products-list__text" },
                "You've viewed ",
                !isFetching && currPage === 0 ? products.length : viewedProducts,
                " of",
                ' ',
                data?.searchCount,
                " products"),
            React.createElement("div", { className: "pagination-wrapper" }, lastOpenPage === currPage && isFetching ? (React.createElement(LoadingSpinner, null)) : (!isLastPage && React.createElement(PaginationButton, { label: 'Load more', hanldeClick: loadNextPage }))))));
};

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { CustomObject, PageURL } from 'helpers';
import { Filter } from './Filter';
import { ProductsList } from './ProductsList';
import './style.css';
export const Main = () => {
    const globalFilterValues = useSelector(getGlobalFilterValues);
    useEffect(() => {
        const existGlobalValues = CustomObject.removeEmptyField(globalFilterValues);
        const newUrlParams = new URLSearchParams(existGlobalValues);
        PageURL.update(newUrlParams.toString());
    }, [globalFilterValues]);
    return (React.createElement("div", { className: "page" },
        React.createElement("main", { className: "main" },
            React.createElement(Filter, null),
            React.createElement(ProductsList, null))));
};

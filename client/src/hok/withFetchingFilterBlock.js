import React from 'react';
import { productAPI } from 'services';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { LoadingSpinner } from 'components/UI';
export const withFetchingFilterBlock = (Component) => {
    return (props) => {
        const globalFilterValues = useSelector(getGlobalFilterValues);
        const { data, isFetching } = productAPI.useGetFilterdProductsQuery({
            ...globalFilterValues,
            page: '',
            [props.blockName]: [],
            ...(props.additionalUrlParams && props.additionalUrlParams),
        });
        const availableNames = [
            ...new Set(data?.products.map((product) => product[props.blockName])),
        ];
        if (isFetching)
            return React.createElement(LoadingSpinner, null);
        return React.createElement(Component, { data: availableNames, ...props });
    };
};

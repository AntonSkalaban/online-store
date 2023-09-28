import React from 'react';
import { productAPI } from 'services';
import { LoadingSpinner } from 'components/UI';
export const withProductFetching = (Component) => {
    return (props) => {
        const { data: product, isFetching } = productAPI.useGetProductQuery(props.productId);
        if (isFetching)
            return React.createElement(LoadingSpinner, null);
        if (product)
            return React.createElement(Component, { product: product, ...props });
        return null;
    };
};

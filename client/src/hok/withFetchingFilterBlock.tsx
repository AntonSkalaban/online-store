import React from 'react';
import { Product } from 'types';
import { filterAPI } from 'services/api';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { FormFilterValues } from 'store/slice';
import { LoadingSpinner } from 'components/UI';

interface withFetchingFilterBlockProps {
  blockName: keyof FormFilterValues;
  additionalUrlParams?: FormFilterValues;
  classMode?: string;
}

export const withFetchingFilterBlock = (
  Component: React.FC<withFetchingFilterBlockProps & { data: string[] }>
) => {
  return (props: withFetchingFilterBlockProps) => {
    const globalFilterValues = useSelector(getGlobalFilterValues);

    const { filterData, isFetching } = filterAPI.useGetFilterdProductsQuery(
      {
        ...globalFilterValues,
        page: '',
        [props.blockName]: [],
        ...(props.additionalUrlParams && props.additionalUrlParams),
      },
      {
        selectFromResult: ({ data, isFetching }) => {
          return {
            filterData: [
              ...new Set(
                data?.products.map((product) => product[props.blockName as keyof Product])
              ),
            ] as string[],
            isFetching,
          };
        },
      }
    );

    if (isFetching) return <LoadingSpinner />;

    return <Component data={filterData} {...props} />;
  };
};

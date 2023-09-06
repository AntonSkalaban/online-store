import { useEffect, useState } from 'react';
import { Product } from '../types';
import { productAPI } from '../services';
import { CustomArray } from '../helpers';

export const useGetSameProducts = (category: string[], brand: string[]) => {
  const [products, setProducts] = useState([] as Product[]);

  const { data: sameByCategory, isFetching: isCategoryFetching } =
    productAPI.useGetFilterdProductsQuery({ category: category });

  const { data: sameByBrand, isFetching: isBrandFetching } = productAPI.useGetFilterdProductsQuery({
    brand: brand,
  });

  useEffect(() => {
    if (sameByCategory && sameByBrand && !isCategoryFetching && !isBrandFetching) {
      const uniqProducst = CustomArray.removeDublicateObjects(
        [...sameByCategory.products, ...sameByBrand.products],
        '_id'
      );

      setProducts(uniqProducst);
    }
  }, [isBrandFetching, isCategoryFetching, sameByBrand, sameByCategory]);

  return products;
};

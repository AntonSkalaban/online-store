import React, { useEffect, useState } from 'react';
import { productAPI } from '../../../services/api';
import { CustomArray } from '../../../helpers';
import { Product } from '../../../types';
import { CardsList } from '../../../components';
import { AboutSection } from '../AboutSection';

interface AlsoLikeParams {
  productId: string;
  category: string;
  brand: string;
}

export const AlsoLike: React.FC<AlsoLikeParams> = ({ productId, category, brand }) => {
  const [products, setData] = useState([] as Product[]);

  const sameByCategory = productAPI.useGetFilterdProductsQuery({ category: [category] }).data;
  const sameByBrand = productAPI.useGetFilterdProductsQuery({ brand: [brand] }).data;

  useEffect(() => {
    if (sameByCategory?.length && sameByBrand?.length) {
      const uniqProducst = CustomArray.removeDublicateObjects([...sameByCategory, ...sameByBrand]);
      const products = uniqProducst.filter(({ _id }) => productId !== _id);

      setData(products);
    }
  }, [productId, sameByCategory, sameByBrand]);

  if (!products.length) return null;

  return (
    <AboutSection title="You might also like">
      <CardsList products={products} cardSize="small" />
    </AboutSection>
  );
};

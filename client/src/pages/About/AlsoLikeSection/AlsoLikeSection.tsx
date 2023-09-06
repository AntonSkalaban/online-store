import React from 'react';
import { CardsList } from '../../../components';
import { useGetSameProducts } from '../../../hooks';
import { AboutSection } from '../AboutSection';

interface AlsoLikeParams {
  productId: string;
  category: string;
  brand: string;
}

export const AlsoLikeSection: React.FC<AlsoLikeParams> = ({ productId, category, brand }) => {
  const sameProducts = useGetSameProducts([category], [brand]);

  const products = sameProducts.filter(({ _id }) => productId !== _id);

  return (
    <AboutSection title="You might also like">
      <CardsList products={products} cardSize="small" />
    </AboutSection>
  );
};

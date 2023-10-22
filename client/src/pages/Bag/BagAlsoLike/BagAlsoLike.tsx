import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemKeys } from 'store/selectors';
import { useGetSameProducts } from 'hooks';
import { Carousel, ProductCard } from 'components';
import { WhiteSection } from 'components/UI';

export const BagAlsoLike = () => {
  const productCategoriesInBag = useSelector((state) => getBagItemKeys(state, 'category'));
  const productBrandsInBag = useSelector((state) => getBagItemKeys(state, 'brand'));
  const productIdssInBag = useSelector((state) => getBagItemKeys(state, '_id'));

  const fetchingProducts = useGetSameProducts(productCategoriesInBag, productBrandsInBag);

  if (!fetchingProducts.length) return null;

  const sameProducts = fetchingProducts.filter(({ _id }) => {
    return !productIdssInBag.includes(_id);
  });

  return (
    <WhiteSection title={'A little something extra?'} subtitle={`${sameProducts.length} items`}>
      <Carousel>
        {sameProducts.map((product) => {
          return <ProductCard key={product._id} className={'slider-card'} product={product} />;
        })}
      </Carousel>
    </WhiteSection>
  );
};

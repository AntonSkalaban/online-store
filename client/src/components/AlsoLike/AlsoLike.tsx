import React, { useEffect, useState } from 'react';
import { productAPI } from '../../services';
import { CustomArray } from '../../helpers';
import { Product } from '../../types';
import { ProductCard } from '../../components/ProductCard/ProductCard';
// import './style.css';

interface AlsoLikeParams {
  productId: string;
  category: string;
  brand: string;
}
export const AlsoLike = ({ productId, category, brand }: AlsoLikeParams) => {
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
    <section className="also-like">
      <h4 className="section-title">You might also like</h4>

      <div className="products-list">
        {products.map((product) => {
          return <ProductCard key={product._id} className="small-card" product={product} />;
        })}
      </div>
    </section>
  );
};

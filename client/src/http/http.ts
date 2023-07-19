// import { getDiscountedPrice } from '../helpers/getDiscountPrice';
// import { Category, Product } from '../types';
// import { url } from './const';

// // export const getCategories = async (): Promise<Category[]> => {
// //   const res = await fetch(`${url}/categories`);
// //   const data = await res.json();
// //   return data;
// // };

// export const foo = async () => {
//   console.log('daw');
//   const res = await fetch('https://dummyjson.com/products');
//   const data = (await res.json()).products as Product[];
//   console.log(data);
//   const prod = data.map((i) => {
//     if (Math.random() < 0.7) {
//       i.discountPercentage = 0;
//       i.discountPrice = i.price;
//       return i;
//     }
//     i.discountPrice = +getDiscountedPrice(i.price, i.discountPercentage);
//     return i;
//   });
//   console.log(prod);
//   prod.forEach((i) =>
//     fetch('http://localhost:3000/products', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(
//         // { name: i }
//         {
//           title: i.title,
//           description: i.description,
//           price: i.price,
//           discountPercentage: i.discountPercentage,
//           discountPrice: i.discountPrice,
//           rating: i.rating,
//           stock: i.stock,
//           brand: i.brand,
//           category: i.category,
//           thumbnail: i.thumbnail,
//           images: i.images,
//         }
//       ),
//     })
//   );
// };

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  discountPrice: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  __v: number;
}

export interface ResponceData {
  products: Product[];
  searchCount: number;
  total: number;
}

export interface Category {
  _id: string;
  name: string;
  __v: number;
}
export interface BagItem {
  id: number;
  quantity: number;
}

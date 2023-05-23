import { User } from "../reducers/auth/interfaces";

export interface ProductReviews {
  review: string;
  likes_count: number;
  user: User;
  id: number;
}

export interface Include {
  item: string;
  quantity: number;
}

export interface ProductFromDb {
  id: number;
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: string;
  description: string;
  product_details: ProductDetail[];
  product_image: ProductImage[];
}

export interface ProductDetail {
  includes: Include[];
  features: string;
}

export interface ProductImage {
  image_url: string;
}

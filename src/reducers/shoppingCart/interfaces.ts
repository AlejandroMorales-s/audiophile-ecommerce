import { ProductImage } from "../../commonInterfaces";

export interface InitialState {
  isLoading: boolean;
  shoppingCartProducts: ShoppingCartProduct[] | null;
}

export interface ShoppingCartProduct {
  quantity: number;
  products: ProductDetailsFromShoppingCart;
}

export interface ProductDetailsFromShoppingCart {
  name: string;
  price: string;
  id: number;
  product_image: ProductImage[];
}

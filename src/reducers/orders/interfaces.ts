import { ShoppingCartProduct } from "../shoppingCart/interfaces";

export interface InitialState {
  orders: OrderFromDb[] | null;
  isLoading: boolean;
  orderPricing: Pricing | null;
}

export interface NewOrder {
  products: OrderProductDetails[] | ShoppingCartProduct[];
  pricing: Pricing;
  shipping_info: ShippingInfo;
}

export interface OrderFromDb extends NewOrder {
  id: number;
  user_id: number;
}

export interface Pricing {
  vat: number;
  total: number;
  shipping: number;
  grandTotal: number;
}

export interface OrderProductDetails {
  name: string;
  price: string;
  quantity: number;
  image_url: string;
  product_id: number;
}

export interface ShippingInfo {
  city: string;
  address: string;
  country: string;
  zipCode: number;
}

import { ShoppingCartProduct } from "../shoppingCart/interfaces";

export interface InitialState {
  orders: Order[] | null;
  isLoading: boolean;
}

export interface Order {
  products: ShoppingCartProduct[];
  shippingInfo: ShippingInfo;
  pricing: Pricing;
}

export interface Pricing {
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export interface ShippingInfo {
  address: string;
  zipCode: number;
  city: string;
  country: string;
}

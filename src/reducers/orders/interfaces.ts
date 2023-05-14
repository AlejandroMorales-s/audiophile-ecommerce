import { ShoppingCartProduct } from "../shoppingCart/interfaces";

export interface InitialState {
  orders: OrderFromDb[] | null;
  isLoading: boolean;
  orderPricing: Pricing | null;
}

export interface Order {
  id: number;
  products: ShoppingCartProduct[];
  shippingInfo: ShippingInfo;
  pricing: Pricing;
}

export interface OrderFromDb {
  id: number;
  products: ShoppingCartProduct[];
  shipping_info: ShippingInfo;
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

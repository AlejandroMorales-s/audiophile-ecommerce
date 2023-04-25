export interface InitialState {
  isLoading: boolean;
  products: ShoppingCartProduct[] | null;
}

export interface ShoppingCartProduct {
  name: string;
  price: number;
  product_id: number;
  quantity: number;
}

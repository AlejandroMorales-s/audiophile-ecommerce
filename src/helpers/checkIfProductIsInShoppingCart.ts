import { ShoppingCartProduct } from "../reducers/shoppingCart/interfaces";

interface Props {
  shoppingCart: ShoppingCartProduct[];
  productId: number;
}

export const checkIfProductIsInShoppingCart = ({
  shoppingCart,
  productId,
}: Props) => {
  return shoppingCart.some((product) => product.product_id === productId);
};

import { ShoppingCartProduct } from "../reducers/shoppingCart/interfaces";

interface Props {
  shoppingCart: ShoppingCartProduct[];
  productId: number;
}

export const checkIfProductIsInShoppingCart = ({
  shoppingCart,
  productId,
}: Props) => {
  return shoppingCart.some(
    (shoppingCartProduct) => shoppingCartProduct.products.id === productId
  );
};

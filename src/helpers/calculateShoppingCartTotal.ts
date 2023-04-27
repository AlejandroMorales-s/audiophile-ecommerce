import { ShoppingCartProduct } from "../reducers/shoppingCart/interfaces";

export const calculateShoppingCartTotal = ({
  shoppingCart,
}: {
  shoppingCart: ShoppingCartProduct[];
}) => {
  let total: number = 0;

  shoppingCart.forEach((product) => {
    const { price, quantity } = product;
    const currentProductTotal = price * quantity;

    total += currentProductTotal;
  });

  return total;
};

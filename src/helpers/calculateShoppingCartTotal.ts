import { ShoppingCartProduct } from "../reducers/shoppingCart/interfaces";

export const calculateShoppingCartTotal = ({
  shoppingCart,
}: {
  shoppingCart: ShoppingCartProduct[];
}) => {
  let total = 0;
  const shipping = 50;
  let vat = 0;
  let grandTotal = 0;

  shoppingCart.forEach((ShoppingCartProduct) => {
    const { products, quantity } = ShoppingCartProduct;
    const { price } = products;
    const currentProductTotal = parseInt(price) * quantity;

    total += currentProductTotal;
  });

  vat = total * 0.2;

  grandTotal = shipping + total;

  return { grandTotal, vat, total, shipping };
};

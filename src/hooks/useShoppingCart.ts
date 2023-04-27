import { useEffect, useState } from "react";
//* Redux
import { useAppDispatch } from "../store";
//* Async Thunks
import { getShoppingCart } from "../reducers/shoppingCart/shoppingCartAsyncThunks";
//* Interfaces
import { ShoppingCartProduct } from "../reducers/shoppingCart/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<
    ShoppingCartProduct[] | null
  >(null);

  const dispatch = useAppDispatch();

  const requestShoppingCart = () => {
    dispatch(getShoppingCart()).then((res) => {
      if (res.payload) setShoppingCart(res.payload as ShoppingCartProduct[]);
    });
  };

  useEffect(() => requestShoppingCart, []);

  return { shoppingCart, requestShoppingCart };
};

export default useShoppingCart;

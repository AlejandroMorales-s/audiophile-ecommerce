import { useEffect } from "react";
//* Redux
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { selectShoppingCartProducts } from "../reducers/shoppingCart/shoppingCartReducer";
//* Async Thunks
import { getShoppingCart } from "../reducers/shoppingCart/shoppingCartAsyncThunks";

const useShoppingCart = () => {
  const shoppingCart = useSelector(selectShoppingCartProducts);

  const dispatch = useAppDispatch();

  const requestShoppingCart = () => {
    dispatch(getShoppingCart());
  };

  useEffect(requestShoppingCart, []);

  return { shoppingCart, requestShoppingCart };
};

export default useShoppingCart;

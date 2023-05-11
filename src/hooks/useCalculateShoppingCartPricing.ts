import { useEffect } from "react";
//* Redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { getOrderAmount } from "../reducers/orders/ordersAsyncThunks";
import { selectOrderPricing } from "../reducers/orders/ordersSlice";

const useCalculateShoppingCartPricing = () => {
  const shoppingCartPricing = useSelector(selectOrderPricing);

  const dispatch = useAppDispatch();

  const calculateShoppingCartPricing = () => {
    dispatch(getOrderAmount());
  };

  useEffect(calculateShoppingCartPricing, []);

  return { shoppingCartPricing };
};

export default useCalculateShoppingCartPricing;

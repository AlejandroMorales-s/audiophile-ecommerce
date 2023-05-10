import { useEffect, useState } from "react";
//* Interfaces
import { Pricing } from "../reducers/orders/interfaces";
import { useAppDispatch } from "../store";
import { getOrderAmount } from "../reducers/orders/ordersAsyncThunks";

const useCalculateShoppingCartPricing = () => {
  const [shoppingCartPricing, setShoppingCartPricing] = useState<Pricing>();

  const dispatch = useAppDispatch();

  const calculateShoppingCartPricing = () => {
    dispatch(getOrderAmount()).then((res) => {
      if (!res.payload) return;
      setShoppingCartPricing(res.payload as Pricing);
    });
  };

  useEffect(calculateShoppingCartPricing, []);

  return { shoppingCartPricing };
};

export default useCalculateShoppingCartPricing;

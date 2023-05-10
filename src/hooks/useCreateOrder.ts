import { useEffect, useState } from "react";
//* Hooks
import useValidateInputs from "./useValidateInputs";
import useCalculateShoppingCartPricing from "./useCalculateShoppingCartPricing";
import useShoppingCart from "./useShoppingCart";
//* Redux
import { Order, ShippingInfo } from "../reducers/orders/interfaces";

const useCreateOrder = () => {
  //* Custom hooks
  const { inputErrors, setInputs } = useValidateInputs();
  const { shoppingCartPricing } = useCalculateShoppingCartPricing();
  const { shoppingCart } = useShoppingCart();

  //* States
  const [values, setValues] = useState<ShippingInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<null | Order>(null);

  //* Add inputs
  const addInputs = (inputs: ShippingInfo) => {
    setInputs(inputs);
    setValues(inputs);
  };

  //* Create order
  const createOrderObject = () => {
    setIsLoading(true);

    if (
      Object.keys(inputErrors).length ||
      !shoppingCart ||
      !shoppingCartPricing ||
      !values
    )
      return setIsLoading(false);

    setOrder({
      products: shoppingCart,
      shippingInfo: values,
      pricing: shoppingCartPricing,
    });

    setIsLoading(false);
  };

  useEffect(createOrderObject, [inputErrors]);

  return { addInputs, inputErrors, isLoading, order };
};

export default useCreateOrder;

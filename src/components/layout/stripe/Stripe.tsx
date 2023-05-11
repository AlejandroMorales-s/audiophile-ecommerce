import { useState, useEffect, FC } from "react";
import {
  Appearance,
  StripeElementsOptionsMode,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "../../common/stripeForm/StripeForm";
import { useSelector } from "react-redux";
import { selectShoppingCartProducts } from "../../../reducers/shoppingCart/shoppingCartReducer";
import { Order } from "../../../reducers/orders/interfaces";
import instance from "../../../axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

interface ComponentProps {
  orderData: Order | null;
}

const Stripe: FC<ComponentProps> = ({ orderData }) => {
  const [clientSecret, setClientSecret] = useState(undefined);

  const shoppingCart = useSelector(selectShoppingCartProducts);

  useEffect(() => {
    if (!shoppingCart) return;

    instance
      .post(
        "payment/create-payment-intent",
        { items: shoppingCart },
        { withCredentials: true }
      )
      .then(({ data }) => {
        setClientSecret(data.clientSecret);
      });
  }, [shoppingCart]);

  const appearance: Appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#d87d4a",
    },
  };
  const options: StripeElementsOptionsMode = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeForm orderData={orderData} />
        </Elements>
      )}
    </div>
  );
};

export default Stripe;

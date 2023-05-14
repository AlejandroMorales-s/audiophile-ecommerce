import React, { useEffect, useState, FC } from "react";
//* Stripe
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./StripeForm.module.scss";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
//* Components
import CheckoutConfirmation, {
  CheckoutData,
} from "../../layout/checkoutConfirmation/CheckoutConfirmation";
//* Redux
import { useAppDispatch } from "../../../store";
import { setNotificationInfo } from "../../../reducers/notification/notificationReducer";
import { saveOrder } from "../../../reducers/orders/ordersAsyncThunks";
//* Interfaces
import { Order } from "../../../reducers/orders/interfaces";
import { deleteShoppingCart } from "../../../reducers/shoppingCart/shoppingCartAsyncThunks";
import PrimaryButton from "../primaryButton/PrimaryButton";
import styles from "./StripeForm.module.scss";

interface ComponentProps {
  orderData: Order | null;
}

const CheckoutForm: FC<ComponentProps> = ({ orderData }) => {
  //* Stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  //* States
  const [message, setMessage] = useState<null | string | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>();

  const dispatch = useAppDispatch();

  //* Payment intent
  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  //* Payment
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173",
      },
      redirect: "if_required",
    });

    if (!orderData) return;

    if (!error) {
      dispatch(
        saveOrder({
          orderData,
        })
      ).then((action) => {
        if (!action.payload) return;
        setCheckoutData(action.payload[0]);
        dispatch(deleteShoppingCart());
      });
      return;
    }

    if (error.type === "card_error" || error.type === "validation_error") {
      dispatch(
        setNotificationInfo({
          message: error.message as string,
          title: "Something went wrong",
          type: "error",
        })
      );
    } else {
      dispatch(
        setNotificationInfo({
          message: "An unexpected error occurred",
          title: "Something went wrong",
          type: "error",
        })
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form className={styles["payment-form"]} onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <PrimaryButton
          disabled={isLoading || !stripe || !elements}
          type="submit"
          text="Pay now"
        />

        {/* Show any error or success messages */}
        {message && <div className={styles["payment-message"]}>{message}</div>}
      </form>
      {checkoutData && <CheckoutConfirmation checkoutData={checkoutData} />}
    </>
  );
};

export default CheckoutForm;

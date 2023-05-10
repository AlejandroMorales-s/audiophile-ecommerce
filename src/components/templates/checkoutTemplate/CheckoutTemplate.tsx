import useCreateOrder from "../../../hooks/useCreateOrder";
import GeneralTemplate from "../generalTemplate/GeneralTemplate";
import ShippingAddressForm from "../../layout/shippingAddressForm/ShippingAddressForm";
import Stripe from "../../layout/stripe/Stripe";
import styles from "./CheckoutTemplate.module.scss";
import Summary from "../../layout/summary/Summary";

const CheckoutTemplate = () => {
  const { inputErrors, addInputs, isLoading, order } = useCreateOrder();
  return (
    <GeneralTemplate title="Checkout">
      <section className={styles["checkout-container"]}>
        <article className={styles["checkout-form"]}>
          <h4>Checkout</h4>

          <div>
            <p className="subtitle">Shipping info</p>
            <ShippingAddressForm
              createOrder={{ addInputs, inputErrors, isLoading }}
            />
          </div>

          <div className={!order ? styles["payment-blocked"] : ""}>
            <p className="subtitle">Payment details</p>
            <Stripe orderData={order} />
          </div>
        </article>

        <article className={styles["checkout-summary"]}>
          <Summary />
        </article>
      </section>
    </GeneralTemplate>
  );
};

export default CheckoutTemplate;

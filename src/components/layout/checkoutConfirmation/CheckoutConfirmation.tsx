import { FC } from "react";
import PopupsTemplate from "../../templates/popupsTemplate/PopupsTemplate";
import styles from "./CheckoutConfirmation.module.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
import ShoppingCartMenuProduct from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProduct";
import { ShoppingCartProduct } from "../../../reducers/shoppingCart/interfaces";
import { Pricing } from "../../../reducers/orders/interfaces";
import { useNavigate } from "react-router-dom";

interface ComponentProps {
  checkoutData: CheckoutData;
}

export interface CheckoutData {
  products: ShoppingCartProduct[];
  pricing: Pricing;
}

const CheckoutConfirmation: FC<ComponentProps> = ({ checkoutData }) => {
  const { pricing, products } = checkoutData;

  const navigate = useNavigate();

  const orderProducts = () => {
    const firstProduct = products[0];

    if (products.length > 1) {
      const itemsQuantity = products.length - 1;

      return (
        <>
          <ShoppingCartMenuProduct
            product={firstProduct}
            key={firstProduct.product_id}
            inSummary
          />
          <hr />
          <p>and other {itemsQuantity} item(s)</p>
        </>
      );
    } else {
      return (
        <ShoppingCartMenuProduct
          product={firstProduct}
          key={firstProduct.product_id}
          inSummary
        />
      );
    }
  };

  return (
    <PopupsTemplate>
      <div className={styles["checkout-confirm-container"]}>
        <AiFillCheckCircle className={styles["checkout-confirm-icon"]} />

        <div className={styles["checkout-confirm-text"]}>
          <h5>
            Thank you
            <br />
            for your order
          </h5>

          <p className="text-regular">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className={styles["checkout-confirm-details"]}>
          <div className={styles["checkout-confirm-products"]}>
            {orderProducts()}
          </div>

          <div className={styles["checkout-confirm-total"]}>
            <p className="regular-text">Grand total</p>
            <h6>$ {pricing.grandTotal.toLocaleString()}</h6>
          </div>
        </div>

        <PrimaryButton handleClick={() => navigate("/")} text="Back to home" />
      </div>
    </PopupsTemplate>
  );
};

export default CheckoutConfirmation;

//* Components
import ShoppingCartMenuProduct from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProduct";
import SummarySkeleton from "./SummarySkeleton";
//* Hooks
import useCalculateShoppingCartPricing from "../../../hooks/useCalculateShoppingCartPricing";
import useShoppingCart from "../../../hooks/useShoppingCart";
//* Styles
import styles from "./Summary.module.scss";

const Summary = () => {
  const { shoppingCartPricing } = useCalculateShoppingCartPricing();
  const { shoppingCart } = useShoppingCart();

  return (
    <div className={styles["summary-container"]}>
      <h6>Summary</h6>
      {shoppingCart && shoppingCartPricing ? (
        <div className={styles["summary-details-container"]}>
          <div className={styles["summary-products"]}>
            {shoppingCart.map((product) => (
              <ShoppingCartMenuProduct
                key={product.product_id}
                inSummary
                product={product}
              />
            ))}
          </div>
          <div className={styles["summary-pricing"]}>
            <p className="regular-text">
              Total <span>${shoppingCartPricing.total.toLocaleString()}</span>
            </p>
            <p className="regular-text">
              Shipping{" "}
              <span>${shoppingCartPricing.shipping.toLocaleString()}</span>
            </p>
            <p className="regular-text">
              Vat (included){" "}
              <span>${shoppingCartPricing.vat.toLocaleString()}</span>
            </p>
            <p className="regular-text">
              Grand total{" "}
              <span>${shoppingCartPricing.grandTotal.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ) : (
        <SummarySkeleton />
      )}
    </div>
  );
};

export default Summary;

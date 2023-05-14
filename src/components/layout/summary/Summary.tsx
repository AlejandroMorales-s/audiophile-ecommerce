//* Components
import ShoppingCartMenuProduct from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProduct";
import SummarySkeleton from "./SummarySkeleton";
//* Hooks
import useCalculateShoppingCartPricing from "../../../hooks/useCalculateShoppingCartPricing";
//* Styles
import styles from "./Summary.module.scss";
import { useSelector } from "react-redux";
import { selectShoppingCartProducts } from "../../../reducers/shoppingCart/shoppingCartReducer";
import { OrderPricingList } from "../../common/orderPricingList/OrderPricingList";

const Summary = () => {
  const { shoppingCartPricing } = useCalculateShoppingCartPricing();

  const shoppingCart = useSelector(selectShoppingCartProducts);

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
          <OrderPricingList orderPricing={shoppingCartPricing} />
        </div>
      ) : (
        <SummarySkeleton />
      )}
    </div>
  );
};

export default Summary;

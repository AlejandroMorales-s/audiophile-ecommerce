//* Components
import ShoppingCartMenuProduct from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProduct";
import SummarySkeleton from "./SummarySkeleton";
import { OrderPricingList } from "../../common/orderPricingList/OrderPricingList";
//* Hooks
import useCalculateShoppingCartPricing from "../../../hooks/useCalculateShoppingCartPricing";
//* Redux
import { useSelector } from "react-redux";
import { selectShoppingCartProducts } from "../../../reducers/shoppingCart/shoppingCartReducer";
//* Styles
import styles from "./Summary.module.scss";

const Summary = () => {
  const { shoppingCartPricing } = useCalculateShoppingCartPricing();

  const shoppingCart = useSelector(selectShoppingCartProducts);

  return (
    <div className={styles["summary-container"]}>
      <h6>Summary</h6>
      {shoppingCart && shoppingCartPricing ? (
        <div className={styles["summary-details-container"]}>
          <div className={styles["summary-products"]}>
            {shoppingCart.map((product, index) => (
              <ShoppingCartMenuProduct
                key={index}
                inSummary
                shoppingCartProduct={product}
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

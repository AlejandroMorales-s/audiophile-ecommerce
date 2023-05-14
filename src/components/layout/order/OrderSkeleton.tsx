import { Skeleton } from "@mui/material";
import styles from "./Order.module.scss";
import ShoppingCartMenuProductSkeleton from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProductSkeleton";

const OrderSkeleton = () => {
  return (
    <div className={styles.order}>
      <Skeleton sx={{ fontSize: "18px" }} width={90} animation="wave" />
      <div className={styles["order-products"]}>
        <ShoppingCartMenuProductSkeleton />
        <ShoppingCartMenuProductSkeleton />
        <ShoppingCartMenuProductSkeleton />
      </div>

      <div className={styles["order-details-container"]}>
        <div className={styles["order-details"]}>
          <div className={styles["order-details-button"]}>
            <Skeleton sx={{ fontSize: "15px" }} width={105} animation="wave" />
            <Skeleton sx={{ fontSize: "15px" }} width={10} animation="wave" />
          </div>
        </div>

        <div className={styles["order-details"]}>
          <div className={styles["order-details-button"]}>
            <Skeleton sx={{ fontSize: "15px" }} width={105} animation="wave" />
            <Skeleton sx={{ fontSize: "15px" }} width={10} animation="wave" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSkeleton;

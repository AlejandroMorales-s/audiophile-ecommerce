import { Skeleton } from "@mui/material";
import styles from "./ShoppingCartMenuProduct.module.scss";

const ShoppingCartMenuProductSkeleton = () => {
  return (
    <div className={styles.product}>
      <div className={styles["product-details-container"]}>
        <Skeleton className={styles.image} variant="rectangular" />
        <div className={styles.details}>
          <Skeleton
            variant="text"
            style={{ width: "125px" }}
            className="regular-text"
          />
          <Skeleton
            variant="text"
            style={{ width: "50px" }}
            className="regular-text"
          />
        </div>
      </div>
      <Skeleton
        variant="rectangular"
        style={{
          width: "75px",
          height: "35px",
        }}
      />
    </div>
  );
};

export default ShoppingCartMenuProductSkeleton;

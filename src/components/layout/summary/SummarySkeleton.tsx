import React from "react";
import styles from "./Summary.module.scss";
import ShoppingCartMenuProductSkeleton from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProductSkeleton";
import { Skeleton } from "@mui/material";

const SummarySkeleton = () => {
  return (
    <div className={styles["summary-details-container"]}>
      <div className={styles["summary-products"]}>
        <ShoppingCartMenuProductSkeleton />
        <ShoppingCartMenuProductSkeleton />
        <ShoppingCartMenuProductSkeleton />
      </div>
      <div className={styles["summary-pricing"]}>
        <p>
          <Skeleton animation="wave" width={90} />
          <Skeleton animation="wave" width={50} />
        </p>
        <p>
          <Skeleton animation="wave" width={100} />
          <Skeleton animation="wave" width={50} />
        </p>
        <p>
          <Skeleton animation="wave" width={120} />
          <Skeleton animation="wave" width={50} />
        </p>
        <p>
          <Skeleton animation="wave" width={110} />
          <Skeleton animation="wave" width={50} />
        </p>
      </div>
    </div>
  );
};

export default SummarySkeleton;

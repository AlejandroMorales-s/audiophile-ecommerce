import { Skeleton } from "@mui/material";
import styles from "./ProductCardSkeleton.module.scss";

const ProductCardSkeleton = () => {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card-img-container"]}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles["product-card-info-container"]}>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "28px", width: "200px" }}
        />
        <div style={{ width: "100%" }}>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
        </div>
        <div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ width: "160px", height: "48px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

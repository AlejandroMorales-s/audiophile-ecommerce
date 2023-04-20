import { Skeleton } from "@mui/material";
import styles from "./ProductInfoSkeleton.module.scss";

const ProductInfoSkeleton = () => {
  return (
    <div style={{ width: "100%" }} className={styles["product-info-container"]}>
      <div
        style={{ width: "100%" }}
        className={styles["product-info-features"]}
      >
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "28px", width: "200px" }}
        />
        <div>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "15px" }} />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "15px", width: "200px" }}
          />
        </div>
      </div>

      <div className={styles["product-info-includes"]}>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "28px", width: "200px" }}
        />
        <ul>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "15px", width: "250px" }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "15px", width: "250px" }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "15px", width: "250px" }}
          />
        </ul>
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;

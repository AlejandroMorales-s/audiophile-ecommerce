import styles from "./UpdateSetting.module.scss";
import { Skeleton } from "@mui/material";

const ComponentSkeleton = () => {
  return (
    <div className={styles["form-container"]}>
      <div>
        <Skeleton
          animation="wave"
          sx={{ fontSize: "15px" }}
          variant="text"
          width={120}
        />
        <Skeleton animation="wave" variant="rectangular" height={57} />
      </div>
      <div>
        <Skeleton
          animation="wave"
          sx={{ fontSize: "15px" }}
          variant="text"
          width={120}
        />
        <Skeleton animation="wave" variant="rectangular" height={57} />
      </div>
      <div className={styles["buttons-container"]}>
        <Skeleton animation="wave" variant="rectangular" height={47} />
        <Skeleton animation="wave" variant="rectangular" height={47} />
      </div>
    </div>
  );
};

export default ComponentSkeleton;

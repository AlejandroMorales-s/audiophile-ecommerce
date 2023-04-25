import React, { FC } from "react";
import styles from "./PopupsTemplate.module.scss";

interface Props {
  children: React.ReactNode;
}

const PopupsTemplate: FC<Props> = ({ children }) => {
  return (
    <div className={styles["popups-background"]}>
      <div className={styles["popups-container"]}>{children}</div>
    </div>
  );
};

export default PopupsTemplate;

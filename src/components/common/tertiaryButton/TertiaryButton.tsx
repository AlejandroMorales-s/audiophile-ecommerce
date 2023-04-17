import { IoIosArrowForward } from "react-icons/io";
import styles from "./TertiaryButton.module.scss";

const TertiaryButton = () => {
  return (
    <button className={styles["tertiary-button"]}>
      Shop <IoIosArrowForward className={styles["tertiary-button-icon"]} />
    </button>
  );
};

export default TertiaryButton;

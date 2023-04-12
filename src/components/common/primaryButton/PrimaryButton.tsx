import { FC } from "react";
import styles from "./PrimaryButton.module.scss";

interface Props {
  text: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

const PrimaryButton: FC<Props> = ({ text, type = "button", disabled }) => {
  return (
    <button className={styles.button} disabled={disabled} type={type}>
      {text}
    </button>
  );
};

export default PrimaryButton;

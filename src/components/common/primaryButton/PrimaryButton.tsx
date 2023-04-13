import { FC } from "react";
import styles from "./PrimaryButton.module.scss";
import Loader from "../loader/Loader";

interface Props {
  text: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton: FC<Props> = ({
  text,
  type = "button",
  disabled,
  isLoading,
}) => {
  return (
    <button className={styles.button} disabled={disabled} type={type}>
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default PrimaryButton;

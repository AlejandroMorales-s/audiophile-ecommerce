import { FC } from "react";
import styles from "./SecondaryButton.module.scss";

interface Props {
  buttonVariant?: "first-variant" | "second-variant";
  text: string;
  handleClick?: () => void;
}

const SecondaryButton: FC<Props> = ({
  buttonVariant = "first-variant",
  text,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={[styles[buttonVariant], styles["secondary-button"]].join(" ")}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;

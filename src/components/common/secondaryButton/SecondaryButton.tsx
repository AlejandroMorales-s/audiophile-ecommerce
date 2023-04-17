import { FC } from "react";
import styles from "./SecondaryButton.module.scss";

interface Props {
  buttonVariant?: "first-variant" | "second-variant";
  text: string;
}

const SecondaryButton: FC<Props> = ({
  buttonVariant = "first-variant",
  text,
}) => {
  return (
    <button
      className={[styles[buttonVariant], styles["secondary-button"]].join(" ")}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;

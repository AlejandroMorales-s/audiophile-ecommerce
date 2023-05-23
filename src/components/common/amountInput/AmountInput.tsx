import { FC, useState } from "react";
import styles from "./AmountInput.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface Props {
  quantityFromProduct?: number;
  verticalInput?: boolean;
}

const AmountInput: FC<Props> = ({ quantityFromProduct, verticalInput }) => {
  const [quantity, setQuantity] = useState(quantityFromProduct || 1);

  const handlePlusClick = () => {
    if (quantity >= 99) return;

    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity <= 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <div
      className={
        verticalInput
          ? styles["number-input-container-vertical"]
          : styles["number-input-container"]
      }
    >
      <AiOutlinePlus
        onClick={handlePlusClick}
        className={styles["number-input-plus"]}
      />
      <input
        className={styles["number-input"]}
        type="number"
        value={quantity}
        name="amount"
        readOnly
      />
      <AiOutlineMinus
        onClick={handleMinusClick}
        className={styles["number-input-minus"]}
      />
    </div>
  );
};

export default AmountInput;

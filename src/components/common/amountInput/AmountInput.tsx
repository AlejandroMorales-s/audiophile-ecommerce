import { FC, useState } from "react";
import styles from "./AmountInput.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface Props {
  quantityFromProduct?: number;
}

const AmountInput: FC<Props> = ({ quantityFromProduct }) => {
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
    <div className={styles["number-input-container"]}>
      <AiOutlineMinus
        onClick={handleMinusClick}
        className={styles["number-input-minus"]}
      />
      <input
        className={styles["number-input"]}
        type="number"
        value={quantity}
        name="amount"
        readOnly
      />
      <AiOutlinePlus
        onClick={handlePlusClick}
        className={styles["number-input-plus"]}
      />
    </div>
  );
};

export default AmountInput;

import { FC } from "react";
import { Link } from "react-router-dom";
import AmountInput from "../amountInput/AmountInput";
import { ShoppingCartProduct } from "../../../reducers/shoppingCart/interfaces";
import styles from "./ShoppingCartMenuProduct.module.scss";

interface Props {
  product: ShoppingCartProduct;
  inSummary?: boolean;
}

const ShoppingCartMenuProduct: FC<Props> = ({ product, inSummary }) => {
  const { product_id, name, price, quantity, image_url } = product;

  return (
    <div className={styles.product}>
      <Link
        to={`/products/${product_id}`}
        className={styles["product-details-container"]}
      >
        <div className={styles.image}>
          <img src={image_url} alt={name} />
        </div>
        <div className={styles.details}>
          <p className={`${styles.name} regular-text`}>{name}</p>
          <p className={`${styles.price} regular-text`}>
            $ {price.toLocaleString()}
          </p>
        </div>
      </Link>
      {inSummary ? (
        <p className="regular-text">x{quantity}</p>
      ) : (
        <AmountInput quantityFromProduct={quantity} />
      )}
    </div>
  );
};

export default ShoppingCartMenuProduct;

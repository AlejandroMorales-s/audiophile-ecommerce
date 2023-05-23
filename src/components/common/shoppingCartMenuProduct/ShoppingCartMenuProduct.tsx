import { FC } from "react";
import { Link } from "react-router-dom";
import AmountInput from "../amountInput/AmountInput";
import { ShoppingCartProduct } from "../../../reducers/shoppingCart/interfaces";
import styles from "./ShoppingCartMenuProduct.module.scss";
import { OrderProductDetails } from "../../../reducers/orders/interfaces";

interface Props {
  shoppingCartProduct: ShoppingCartProduct | OrderProductDetails;
  inSummary?: boolean;
}

const ShoppingCartMenuProduct: FC<Props> = ({
  shoppingCartProduct,
  inSummary,
}) => {
  //* Extract product information based on the type of shopping cart product
  const productInfo = (() => {
    if ("products" in shoppingCartProduct) {
      const { products, quantity } = shoppingCartProduct as ShoppingCartProduct;
      const { id, name, price, product_image } = products;

      return {
        id,
        name,
        price,
        productImage: product_image[0].image_url,
        quantity,
      };
    } else {
      const { image_url, name, price, product_id, quantity } =
        shoppingCartProduct as OrderProductDetails;

      return {
        id: product_id,
        name,
        price,
        productImage: image_url,
        quantity,
      };
    }
  })();

  return (
    <div className={styles.product}>
      <Link
        to={`/products/${productInfo.id}`}
        className={styles["product-details-container"]}
      >
        <div className={styles.image}>
          <img src={productInfo.productImage} alt={productInfo.name} />
        </div>
        <div className={styles.details}>
          <p className={`${styles.name} regular-text`}>{productInfo.name}</p>
          <p className={`${styles.price} regular-text`}>
            $ {productInfo.price.toLocaleString()}
          </p>
        </div>
      </Link>
      {inSummary ? (
        <p className="regular-text">x{productInfo.quantity}</p>
      ) : (
        <AmountInput quantityFromProduct={productInfo.quantity} />
      )}
    </div>
  );
};

export default ShoppingCartMenuProduct;

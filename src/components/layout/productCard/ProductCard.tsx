import { FC } from "react";
import { Link } from "react-router-dom";
//* Components
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
import AmountInput from "../../common/amountInput/AmountInput";
//* Hooks
import useProductInShoppingCart from "../../../hooks/useProductInShoppingCart";
//* Interfaces
import { ProductFromDb } from "../../../commonInterfaces";
//* Styles
import styles from "./ProductCard.module.scss";

interface Props {
  product: ProductFromDb;
  inProductDetails?: boolean;
}

const ProductCard: FC<Props> = ({ product, inProductDetails }) => {
  const { id, name, description, new: isNew, price, product_image } = product;

  //* Hooks
  const { addProduct, removeProduct, inShoppingCart } =
    useProductInShoppingCart({
      productId: id,
    });

  //* Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const quantityInput = form.elements.namedItem("amount") as HTMLInputElement;
    const quantity = parseInt(quantityInput.value);

    if (inShoppingCart) removeProduct({ productId: id });
    else addProduct({ productId: id, quantity });
  };

  return (
    <article className={styles["product-card"]}>
      <div className={styles["product-card-img-container"]}>
        <img src={product_image[0].image_url} alt={name} />
      </div>
      <div className={styles["product-card-info-container"]}>
        {isNew && <span className="overline">New product</span>}

        <h3>{name}</h3>
        <p className="regular-text">{description}</p>

        {inProductDetails && (
          <p className={styles["product-card-price"]}>
            $ {price.toLocaleString()}
          </p>
        )}

        {!inProductDetails ? (
          <Link to={`/products/${id}`}>
            <PrimaryButton text="See product" />
          </Link>
        ) : (
          <form className={styles["product-card-form"]} onSubmit={handleSubmit}>
            <AmountInput />

            <PrimaryButton
              type="submit"
              text={!inShoppingCart ? "Add to cart" : "Remove from cart"}
            />
          </form>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

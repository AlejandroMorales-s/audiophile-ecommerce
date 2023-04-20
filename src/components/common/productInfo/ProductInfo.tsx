import { FC } from "react";
import { ProductFromDb } from "../../../commonInterfaces";
import styles from "./ProductInfo.module.scss";

interface Props {
  product: ProductFromDb;
}

const ProductInfo: FC<Props> = ({ product }) => {
  const { features, includes } = product;

  return (
    <article className={styles["product-info-container"]}>
      <div className={styles["product-info-features"]}>
        <h3>Features</h3>
        <p
          className="regular-text"
          dangerouslySetInnerHTML={{
            __html: features.replace(/\\n/g, "<br/>"),
          }}
        />
      </div>

      <div className={styles["product-info-includes"]}>
        <h3>In the box</h3>
        <ul>
          {includes.map((includeItem, index) => {
            const { item, quantity } = includeItem;
            return (
              <li className="regular-text" key={index}>
                <span>{`${quantity}x`}</span>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default ProductInfo;

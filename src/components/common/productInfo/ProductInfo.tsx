import { FC } from "react";
import { ProductDetail } from "../../../commonInterfaces";
import styles from "./ProductInfo.module.scss";

interface Props {
  productDetails: ProductDetail[];
}

const ProductInfo: FC<Props> = ({ productDetails }) => {
  const { features, includes } = productDetails[0];

  return (
    <article className={styles["product-info-container"]}>
      <div className={styles["product-info-features"]}>
        <h5>Features</h5>
        <p
          className="regular-text"
          dangerouslySetInnerHTML={{
            __html: features.replace(/\\n/g, "<br/>"),
          }}
        />
      </div>

      <div className={styles["product-info-includes"]}>
        <h5>In the box</h5>
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

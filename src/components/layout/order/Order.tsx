import { FC, useState } from "react";
//* Icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
//* Components
import ShoppingCartMenuProduct from "../../common/shoppingCartMenuProduct/ShoppingCartMenuProduct";
import { OrderPricingList } from "../../common/orderPricingList/OrderPricingList";
//* Styles
import styles from "./Order.module.scss";
//* Interfaces
import { OrderFromDb } from "../../../reducers/orders/interfaces";

interface ComponentProps {
  order: OrderFromDb;
}

const Order: FC<ComponentProps> = ({ order }) => {
  const { pricing, products, shipping_info, id } = order;

  const [pricingDetailsOpen, setPricingDetailsOpen] = useState(false);
  const [shippingDetailsOpen, setShippingDetailsOpen] = useState(false);

  return (
    <div className={styles.order}>
      <h6>Order id: {id}</h6>
      <div className={styles["order-products"]}>
        {products.map((product) => (
          <ShoppingCartMenuProduct
            key={product.product_id}
            inSummary
            shoppingCartProduct={product}
          />
        ))}
      </div>

      <div className={styles["order-details-container"]}>
        <div className={styles["order-details"]}>
          <div
            className={styles["order-details-button"]}
            role="button"
            onClick={() => setShippingDetailsOpen(!shippingDetailsOpen)}
          >
            <p className="subtitle">Shipping address</p>
            <MdOutlineKeyboardArrowDown
              className={styles["order-details-icon"]}
            />
          </div>

          {shippingDetailsOpen && (
            <div className={styles["order-details-shipping-info"]}>
              <ul>
                <li className="regular-text">
                  Address<span>{shipping_info.address}</span>
                </li>
                <li className="regular-text">
                  Zip code<span>{shipping_info.zipCode}</span>
                </li>
                <li className="regular-text">
                  City<span>{shipping_info.city}</span>
                </li>
                <li className="regular-text">
                  Country<span>{shipping_info.country}</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles["order-details"]}>
          <div
            className={styles["order-details-button"]}
            role="button"
            onClick={() => setPricingDetailsOpen(!pricingDetailsOpen)}
          >
            <p className="subtitle">Pricing details</p>
            <MdOutlineKeyboardArrowDown
              className={styles["order-details-icon"]}
            />
          </div>
          {pricingDetailsOpen && <OrderPricingList orderPricing={pricing} />}
        </div>
      </div>
    </div>
  );
};

export default Order;

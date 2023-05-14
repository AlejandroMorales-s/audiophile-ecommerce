import React, { FC } from "react";
import { Pricing } from "../../../reducers/orders/interfaces";
import styles from "./OrderPricingList.module.scss";

interface ComponentProps {
  orderPricing: Pricing;
}

export const OrderPricingList: FC<ComponentProps> = ({ orderPricing }) => {
  return (
    <div className={styles["order-pricing"]}>
      <ul>
        <li className="regular-text">
          Total <span>${orderPricing.total.toLocaleString()}</span>
        </li>
        <li className="regular-text">
          Shipping <span>${orderPricing.shipping.toLocaleString()}</span>
        </li>
        <li className="regular-text">
          Vat (included) <span>${orderPricing.vat.toLocaleString()}</span>
        </li>
        <li className="regular-text">
          Grand total <span>${orderPricing.grandTotal.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

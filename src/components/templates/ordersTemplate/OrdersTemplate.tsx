import { useEffect } from "react";
//* Template
import GeneralTemplate from "../generalTemplate/GeneralTemplate";
//* Redux
import { getUserOrders } from "../../../reducers/orders/ordersAsyncThunks";
import { useAppDispatch } from "../../../store";
import { selectOrders } from "../../../reducers/orders/ordersSlice";
import { useSelector } from "react-redux";
//* Components
import Order from "../../layout/order/Order";
import OrderSkeleton from "../../layout/order/OrderSkeleton";
//* Styles
import styles from "./OrdersTemplate.module.scss";

const OrdersTemplate = () => {
  const orders = useSelector(selectOrders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <GeneralTemplate title="Orders">
      <section className={styles.orders}>
        <h4>Orders</h4>
        <div className={styles["orders-container"]}>
          {orders ? (
            orders.map((order) => {
              return <Order key={order.id} order={order} />;
            })
          ) : (
            <>
              <OrderSkeleton />
              <OrderSkeleton />
              <OrderSkeleton />
            </>
          )}
        </div>
      </section>
    </GeneralTemplate>
  );
};

export default OrdersTemplate;

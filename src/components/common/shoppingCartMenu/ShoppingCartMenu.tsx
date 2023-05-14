import { Link } from "react-router-dom";
//* Components
import PopupsTemplate from "../../templates/popupsTemplate/PopupsTemplate";
import ShoppingCartMenuProductSkeleton from "../shoppingCartMenuProduct/ShoppingCartMenuProductSkeleton";
import ShoppingCartMenuProduct from "../shoppingCartMenuProduct/ShoppingCartMenuProduct";
import PrimaryButton from "../primaryButton/PrimaryButton";
//* Redux
import { useAppDispatch } from "../../../store";
import { deleteShoppingCart } from "../../../reducers/shoppingCart/shoppingCartAsyncThunks";
import { setNotificationInfo } from "../../../reducers/notification/notificationReducer";
//* Styles
import styles from "./ShoppingCartMenu.module.scss";
//* Hooks
import useShoppingCart from "../../../hooks/useShoppingCart";
//* Helpers
import { calculateShoppingCartTotal } from "../../../helpers";

const ShoppingCart = () => {
  const { shoppingCart, requestShoppingCart } = useShoppingCart();

  const dispatch = useAppDispatch();

  const handleRemoveItems = () => {
    if (shoppingCart?.length === 0) return;

    dispatch(deleteShoppingCart()).then(() => {
      requestShoppingCart();
      dispatch(
        setNotificationInfo({
          message: "The shopping cart was deleted successfully",
          title: "Action done successfully",
          type: "success",
        })
      );
    });
  };

  return (
    <PopupsTemplate>
      <div className={styles["shopping-cart-menu"]}>
        <div className={styles.header}>
          <h6>Cart({shoppingCart ? shoppingCart.length : 0})</h6>
          <p onClick={handleRemoveItems} className="regular-text">
            Remove all
          </p>
        </div>

        <div className={styles.products}>
          {!shoppingCart ? (
            <>
              <ShoppingCartMenuProductSkeleton />
              <ShoppingCartMenuProductSkeleton />
              <ShoppingCartMenuProductSkeleton />
            </>
          ) : (
            <>
              {shoppingCart.length > 0 ? (
                shoppingCart.map((product) => (
                  <ShoppingCartMenuProduct
                    key={product.product_id}
                    product={product}
                  />
                ))
              ) : (
                <h6>Shopping cart is empty!</h6>
              )}
            </>
          )}
        </div>

        <div className={styles["total-price-container"]}>
          <p className="regular-text">Total</p>
          <p className={`${styles.price} regular-text`}>
            $
            {shoppingCart &&
              calculateShoppingCartTotal({
                shoppingCart,
              }).total.toLocaleString()}
          </p>
        </div>

        <Link to="/checkout">
          <PrimaryButton
            disabled={!shoppingCart || !shoppingCart.length}
            text="Checkout"
          />
        </Link>
      </div>
    </PopupsTemplate>
  );
};

export default ShoppingCart;

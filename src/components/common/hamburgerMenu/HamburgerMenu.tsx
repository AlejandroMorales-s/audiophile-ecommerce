import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
//* Components
import NavbarPages from "../navbarPages/NavbarPages";
//* Redux
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../reducers/auth/authReducer";
//* Styles
import styles from "./HamburgerMenu.module.scss";

const userAccountLinks = [
  { name: "Settings", path: "/user/settings" },
  { name: "Wishlist", path: "/user/wishlist" },
  { name: "Orders", path: "/user/orders" },
  { name: "Payment methods", path: "/user/payment-methods" },
  { name: "Shipping addresses", path: "/user/shipping-addresses" },
];

interface Props {
  menuOpenedInMobile: boolean;
}

const HamburgerMenu: FC<Props> = ({ menuOpenedInMobile }) => {
  const userLogged = useSelector(selectLoggedUser);
  return (
    <div
      style={{
        transformOrigin: menuOpenedInMobile ? "top left" : "top right",
        left: menuOpenedInMobile ? "-1rem" : "auto",
        right: menuOpenedInMobile ? "auto" : "5rem",
      }}
      className={styles.container}
    >
      <div className={styles["categories-section"]}>
        <h5 className={styles.title}>Categories</h5>
        <NavbarPages inHamburgerMenu />
      </div>
      <div className={styles.section}>
        <h5 className={styles.title}>Account</h5>
        {userLogged ? (
          <>
            {userAccountLinks.map((link, index) => {
              const { name, path } = link;
              return (
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "hsl(22, 65%, 57%)" : "",
                    backgroundColor: isActive ? "hsla(22, 65%, 57%, 0.25)" : "",
                  })}
                  className={`${styles.link} subtitle`}
                  to={path}
                  key={index}
                >
                  {name}
                </NavLink>
              );
            })}
          </>
        ) : (
          <>
            <Link className={`${styles.link} subtitle`} to={"/auth/login"}>
              Login
            </Link>
            <Link className={`${styles.link} subtitle`} to={"/auth/sign-up"}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;

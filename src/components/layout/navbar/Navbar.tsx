import { useState } from "react";
import { Link } from "react-router-dom";
//* Components
import Logo from "../../common/logo/Logo";
import HamburgerMenu from "../../common/hamburgerMenu/HamburgerMenu";
import NavbarPages from "../../common/navbarPages/NavbarPages";
import ShoppingCart from "../../common/shoppingCartMenu/ShoppingCartMenu";
//* Redux
import { useSelector } from "react-redux";
import {
  selectLoggedUser,
  selectUserData,
} from "../../../reducers/auth/authReducer";
//* Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
//* Styles
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  const userLogged = useSelector(selectLoggedUser);
  const user = useSelector(selectUserData);

  return (
    <>
      <nav className={styles.background}>
        <div className={styles.navbar}>
          <GiHamburgerMenu
            onClick={() => setMenuMobileOpen(!menuMobileOpen)}
            className={[styles.icon, styles["hamburger-icon"]].join(" ")}
          />

          <div className={styles["logo-container"]}>
            <Logo />
          </div>

          <div className={styles["categories-container"]}>
            <NavbarPages inHamburgerMenu={false} />
          </div>

          {userLogged ? (
            <div className={styles["user-container"]}>
              <div
                role="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles["username-container"]}
              >
                <p className={`${styles["login-link"]} subtitle`}>
                  Hello, {user?.first_name}
                </p>

                <MdKeyboardArrowDown className={styles["username-icon"]} />
              </div>
              <AiOutlineShoppingCart
                onClick={() => setShoppingCartOpen(!shoppingCartOpen)}
                className={styles.icon}
              />
            </div>
          ) : (
            <Link
              className={`subtitle ${styles["login-link"]}`}
              to={"/auth/login"}
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </nav>

      {menuOpen && <HamburgerMenu menuOpenedInMobile={false} />}

      {menuMobileOpen && <HamburgerMenu menuOpenedInMobile />}

      {shoppingCartOpen && <ShoppingCart />}
    </>
  );
};

export default Navbar;

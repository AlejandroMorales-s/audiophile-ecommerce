import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarPages.module.scss";

const pages = [
  { name: "Home", path: "/" },
  { name: "Headphones", path: "/products/category/headphones" },
  { name: "Speakers", path: "/products/category/speakers" },
  { name: "Earphones", path: "/products/category/earphones" },
];

interface NavbarPagesProps {
  inHamburgerMenu: boolean;
}

const NavbarPages: FC<NavbarPagesProps> = ({ inHamburgerMenu }) => {
  return (
    <>
      {pages.map((page, index) => {
        const { name, path } = page;
        return (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "hsl(22, 65%, 57%)" : "",
              backgroundColor:
                isActive && inHamburgerMenu ? "hsla(22, 65%, 57%, 0.25)" : "",
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
  );
};

export default NavbarPages;

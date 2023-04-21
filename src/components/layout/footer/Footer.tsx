//* Components
import Logo from "../../common/logo/Logo";
import NavbarPages from "../../common/navbarPages/NavbarPages";
//* Icons
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
//* Styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-info-container"]}>
        <div className={styles.rectangle} />
        <div className={styles["logo-container"]}>
          <Logo />
        </div>
        <div className={styles["links-container"]}>
          <NavbarPages inHamburgerMenu={false} />
        </div>
        <p className={`${styles.description} regular-text`}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={`regular-text ${styles.copyright}`}>
          Copyright 2021. All Rights Reserved
        </p>
        <div className={styles["social-media-links"]}>
          <AiFillFacebook className={styles["social-media-icon"]} />
          <AiOutlineTwitter className={styles["social-media-icon"]} />
          <AiOutlineInstagram className={styles["social-media-icon"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

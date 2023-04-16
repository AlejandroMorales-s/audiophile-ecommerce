import React from "react";
import styles from "./Header.module.scss";
import PrimaryButton from "../../common/primaryButton/PrimaryButton";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles["image-container"]}></div>
      <div className={styles["info-container"]}>
        <div className={styles.info}>
          <p className={`overline ${styles.headline}`}>New product</p>
          <h3 className={styles.title}>
            XX99 Mark || <br /> headphones
          </h3>
          <p className={`regular-text ${styles.paragraph}`}>
            Experience natural, lifelike audio and <br /> exceptional build
            quality made for the <br /> passionate music enthusiast.
          </p>
          <PrimaryButton text="See product" />
        </div>
      </div>
    </header>
  );
};

export default Header;

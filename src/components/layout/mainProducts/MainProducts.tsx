//* Components
import SecondaryButton from "../../common/secondaryButton/SecondaryButton";
//* Images
import patternCircles from "../../assets/common/pattern-circles.svg";
import firstProductImageMobile from "../../assets/mainProducts/mobile/image-speaker-zx9.png";
import firstProductImageTablet from "../../assets/mainProducts/tablet/image-speaker-zx9.png";
import firstProductImageDesktop from "../../assets/mainProducts/desktop/image-speaker-zx9.png";
//* Styles
import styles from "./MainProducts.module.scss";

const images = [
  {
    url: firstProductImageMobile,
    device: "mobile",
  },
  {
    url: firstProductImageTablet,
    device: "tablet",
  },
  {
    url: firstProductImageDesktop,
    device: "desktop",
  },
];

const MainProducts = () => {
  return (
    <section className={styles.section}>
      <article className={styles["first-product"]}>
        <div className={styles["info-container"]}>
          <div className={styles["first-product-image-container"]}>
            <img className={styles.pattern} src={patternCircles} alt="" />
            {images.map((image) => {
              const { url, device } = image;
              return (
                <img
                  key={device}
                  className={styles[`image-${device}`]}
                  src={url}
                  alt="speaker"
                />
              );
            })}
          </div>
          <div className={styles["first-product-info-container"]}>
            <h3>
              ZX9 <br /> speaker
            </h3>
            <p className={`regular-text ${styles.info}`}>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly <br /> remarkable sound.
            </p>
            <SecondaryButton text="See product" />
          </div>
        </div>
      </article>

      <article className={styles["second-product"]}>
        <div className={styles["second-product-info-container"]}>
          <h3>ZX7 speaker</h3>
          <SecondaryButton buttonVariant="second-variant" text="See product" />
        </div>
      </article>

      <article className={styles["third-product"]}>
        <div className={styles["third-product-image"]} />
        <div className={styles["third-product-info-container"]}>
          <h3>YX1 earphones</h3>
          <SecondaryButton buttonVariant="second-variant" text="See product" />
        </div>
      </article>
    </section>
  );
};

export default MainProducts;

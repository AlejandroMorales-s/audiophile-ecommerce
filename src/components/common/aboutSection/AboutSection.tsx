import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles["about-image"]} />
      <div className={styles["about-info-container"]}>
        <h3>
          Bringing you the{" "}
          <span style={{ color: "hsl(22, 65%, 57%)" }}>best</span> audio gear
        </h3>
        <p className="regular-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { FC } from "react";
//* Components
import GeneralTemplate from "../generalTemplate/GeneralTemplate";
import CategorySelectors from "../../common/categorySelectors/CategorySelectors";
import AboutSection from "../../common/aboutSection/AboutSection";
//* Styles
import styles from "./ProductDetailsTemplate.module.scss";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  title: string;
}

const ProductDetailsTemplate: FC<Props> = ({ children, title }) => {
  return (
    <GeneralTemplate title={title}>
      <section className={styles["product-details-template-section"]}>
        <Link
          className={`regular-text ${styles["product-details-template-link"]}`}
          to="/"
        >
          Go Back
        </Link>
        {children}
      </section>
      <CategorySelectors />
      <AboutSection />
    </GeneralTemplate>
  );
};

export default ProductDetailsTemplate;

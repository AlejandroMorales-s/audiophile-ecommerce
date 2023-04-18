import { Link } from "react-router-dom";
//* Components
import TertiaryButton from "../tertiaryButton/TertiaryButton";
//* Assets
import headphones from "../../assets/common/headphones.png";
import speakers from "../../assets/common/speaker.png";
import earphones from "../../assets/common/earphone.png";
//* Styles
import styles from "./CategorySelectors.module.scss";

const categories = [
  {
    name: "Headphones",
    imageLink: headphones,
    link: "/products/category/headphones",
  },
  {
    name: "Speakers",
    imageLink: speakers,
    link: "/products/category/speakers",
  },
  {
    name: "Earphones",
    imageLink: earphones,
    link: "/products/category/earphones",
  },
];

const CategorySelectors = () => {
  return (
    <section className={styles["category-selectors"]}>
      {categories.map((category) => {
        const { name, imageLink, link } = category;
        return (
          <div className={styles["category-selector"]}>
            <img src={imageLink} alt={name} />
            <p className="regular-text">{name}</p>
            <Link to={link}>
              <TertiaryButton />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default CategorySelectors;

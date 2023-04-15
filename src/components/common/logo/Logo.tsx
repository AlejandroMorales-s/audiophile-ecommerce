import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to={"/"} className={styles.logo}>
      audiophile
    </Link>
  );
};

export default Logo;

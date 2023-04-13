import Logo from "../../common/logo/Logo";
import styles from "./LogoNavbar.module.scss";

const LogoNavbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};

export default LogoNavbar;

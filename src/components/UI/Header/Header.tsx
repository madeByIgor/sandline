import React from "react";
import styles from "./style.module.css";
import Button from "../Button/Button";
import logo from "../../../assets/images/svg/logo.svg";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.nav}>
          <Button variant="transparent">Login</Button>
          <Button size="m">Become a client</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "./style.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}></div>
    </div>
  );
};

export default Header;

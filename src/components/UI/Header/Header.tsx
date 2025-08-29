import React from "react";
import styles from "./style.module.css";
import Button from "../Button/Button";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {" "}
        <Button>Become a client</Button>
      </div>
    </div>
  );
};

export default Header;

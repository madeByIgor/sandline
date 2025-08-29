import React from "react";
import styles from "./style.module.css";
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className={`${styles.wrapper}`}>{children}</div>;
};

export default Button;

import React from "react";
import styles from "./style.module.css";
interface ButtonProps {
  children: React.ReactNode;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary" | "transparent";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "l",
  variant = "primary",
}) => {
  const buttonClasses = [
    styles.wrapper,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={`${buttonClasses}`} style={{}}>
      {children}
    </div>
  );
};

export default Button;

import React from "react";
import styles from "./style.module.css";
interface CornerProps {
  size?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Corner: React.FC<CornerProps> = ({
  position = "top-left",
  size = 10,
}) => {
  const cornerClasses = [styles.corner, styles[position]].join(" ");

  return (
    <div
      className={`${cornerClasses} js-corner`}
      style={{ "--size": `${size}px` } as React.CSSProperties}
    >
      <div className={`${styles.lineHor} ${styles.line}`}></div>
      <div className={`${styles.lineVer} ${styles.line}`}></div>
    </div>
  );
};

export default Corner;

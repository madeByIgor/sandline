import React from "react";
import styles from "./style.module.css";

interface SquareProps {
  index: number;
}

const Square: React.FC<SquareProps> = ({ index }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.n}>{index}</div>
    </div>
  );
};

export default Square;

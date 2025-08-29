import React from "react";
import styles from "./style.module.css";

interface SquareProps {
  index: number;
  type?: string;
  stream?: object;
}

const Square: React.FC<SquareProps> = ({ index, stream }) => {
  return (
    <div className={styles.wrapper}>
      {stream?.type === "legal" && (
        <div className={styles.circleWrap} style={{ color: "#b79962" }}>
          <div className={styles.pulsingCircle}></div>
          <div className={styles.circle}></div>
        </div>
      )}
      {stream?.type === "ilegal" && (
        <div className={styles.circleWrap} style={{ color: "#FF4053" }}>
          <div className={styles.pulsingCircle}></div>
          <div className={styles.circle}></div>
        </div>
      )}
      <div className={styles.n}>{index}</div>
    </div>
  );
};

export default Square;

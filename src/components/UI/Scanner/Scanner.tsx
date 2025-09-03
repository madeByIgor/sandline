import React from "react";
import styles from "./style.module.css";

interface ScannerProps {
  height?: string;
}

const Scanner: React.FC<ScannerProps> = ({ height = "100vh" }) => {
  return (
    <div className={`${styles.wrapper} js-scanner`} style={{ height: height }}>
      <div className={styles.line} />
      <div className={styles.blur} />
    </div>
  );
};

export default Scanner;

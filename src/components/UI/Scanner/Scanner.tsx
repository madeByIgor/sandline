import React from "react";
import styles from "./style.module.css";

interface ScannerProps {}

const Scanner: React.FC<ScannerProps> = ({}) => {
  return (
    <div className={`${styles.wrapper} js-scanner`}>
      <div className={styles.line} />
      <div className={styles.blur} />
    </div>
  );
};

export default Scanner;

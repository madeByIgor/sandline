import React from "react";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ScannerProps {
  height?: string;
}

const Scanner: React.FC<ScannerProps> = ({ height }) => {
  useGSAP(() => {
    const colors: string[] = ["#ff0000", "#00ff00", "#0000ff"];
    const nextColor = gsap.utils.wrap(colors);
    let i = 0;

    gsap.to(".js-scanner", {
      duration: 2,
      repeat: -1,
      repeatRefresh: true,
      "--bgColor": () => nextColor(i++),
    });
  });
  return (
    <div className={`${styles.wrapper} js-scanner`} style={{ height: height }}>
      <div className={styles.line} />
      <div className={styles.blur} />
    </div>
  );
};

export default Scanner;

interface HomeHeroInfoBoxProps {}

import styles from "./style.module.css";
import { useRef } from "react";

const HomeHeroInfoBox: React.FC<HomeHeroInfoBoxProps> = ({}) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={container} className={`${styles.homeInfoBox} js-home-info-box`}>
      <div className={styles.homeInfoTitle}>
        <p className="js-home-info-title"></p>
      </div>
      <div className={styles.homeInfoRow}>
        <p className="js-home-info-text-1"></p>
        <p className="js-home-info-text-2"></p>
      </div>
      <div className={styles.homeInfoRow}>
        <p className="js-home-info-text-3"></p>
        <p className="js-home-info-text-4"></p>
      </div>
      <div className={styles.homeInfoRow}>
        <p className="js-home-info-text-5"></p>
        <p className="js-home-info-text-6"></p>
      </div>{" "}
    </div>
  );
};

export default HomeHeroInfoBox;

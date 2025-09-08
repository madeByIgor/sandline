interface HomeHeroInfoBoxProps {}

import styles from "./style.module.css";
import { useRef } from "react";

const HomeHeroInfoBox: React.FC<HomeHeroInfoBoxProps> = ({}) => {
  const container = useRef<HTMLDivElement | null>(null);
  //   useGSAP(() => {
  //     const tl = gsap.timeline();
  //     tl.to(".js-home-info-title", {
  //       scrambleText: "Protected by Sandline",
  //     })
  //       .to(
  //         ".js-home-info-text-1",
  //         {
  //           scrambleText: "Node id:",
  //         },
  //         "-=0.28"
  //       )
  //       .to(
  //         ".js-home-info-text-2",
  //         {
  //           scrambleText: "#a45x-92",
  //         },
  //         "-=0.28"
  //       )
  //       .to(
  //         ".js-home-info-text-3",
  //         {
  //           scrambleText: "activity:",
  //         },
  //         "-=0.28"
  //       )
  //       .to(
  //         ".js-home-info-text-4",
  //         {
  //           scrambleText: "4,392 unauthorized views",
  //         },
  //         "-=0.28"
  //       )
  //       .to(
  //         ".js-home-info-text-5",
  //         {
  //           scrambleText: "integrity:",
  //         },
  //         "-=0.28"
  //       )
  //       .to(
  //         ".js-home-info-text-6",
  //         {
  //           scrambleText: "compromised cdn node",
  //         },
  //         "-=0.28"
  //       );
  //   });
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

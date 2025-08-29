import React, { useRef } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
interface SquareProps {
  index: number;
  type?: string;
  stream?: object;
}

const Square: React.FC<SquareProps> = ({ index, stream }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  useGSAP(
    () => {
      if (!stream?.type) return;
      gsap.set(".js-pulsing-circle", { scale: 0, transformOrigin: "50% 50%" });

      timeline.current = gsap
        .timeline({ repeat: -1 })
        .to(".js-pulsing-circle", {
          scale: 0.6,
          duration: 1,
          ease: "power1.out",
        })
        .to(".js-pulsing-circle", {
          scale: 0.8,
          opacity: 0,
          ease: "power1.out",
          duration: 0.25,
        });
    },
    { scope: containerRef }
  );
  return (
    <div ref={stream?.type ? containerRef : null} className={styles.wrapper}>
      {stream?.type === "legal" && (
        <div
          className={`${styles.circleWrap} ${stream.class}`}
          style={{ color: "var(--sand)" }}
        >
          <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
          <div className={`${styles.circle} js-circle`}></div>
        </div>
      )}
      {stream?.type === "ilegal" && (
        <div
          className={`${styles.circleWrap} ${stream.class}`}
          style={{ color: "var(--sand)" }}
        >
          <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
          <div className={`${styles.circle} js-circle`}></div>
        </div>
      )}
      {/* <div className={styles.n}>{index}</div> */}
    </div>
  );
};

export default Square;

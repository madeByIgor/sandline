import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import DetectedSquare from "./DetectedSquare";
import styles from "./style.module.css";
import DefendedSquare from "./DefendedSquare";

gsap.registerPlugin(useGSAP);
interface SquareProps {
  index: number;
  type?: string;
  stream?: object;
  isDetected?: boolean;
}

const Square: React.FC<SquareProps> = ({ stream, isDetected }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const { isIllegalStream, setIsIllegalStream, heroAniDone } =
    useGlobalContext();
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

  useGSAP(
    () => {
      if (!isIllegalStream) return;
      if (!timeline.current) return;

      timeline.current.kill();
      timeline.current = gsap.timeline();
      timeline.current
        .to(".js-pulsing-circle", { opacity: 0 })
        .to(".js-circle", { opacity: 0, scale: 0.4 }),
        "<";
    },
    { scope: containerRef, dependencies: [isIllegalStream] }
  );
  return (
    <div
      ref={stream?.type ? containerRef : null}
      className={`${styles.wrapper} ${
        isDetected ? styles.detectedWrapper : ""
      }`}
    >
      {stream?.type === "legal" && (
        <div
          className={`${styles.circleWrap} ${stream.class}`}
          style={{ color: "var(--sand)" }}
        >
          <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
          <div className={`${styles.circle} js-circle`}></div>
        </div>
      )}
      {stream?.type === "illegal" && (
        <>
          {isDetected && (
            <DetectedSquare setIsIllegalStream={setIsIllegalStream} />
          )}
          {heroAniDone ? (
            <DefendedSquare />
          ) : (
            <div
              className={`${styles.circleWrap} ${stream.class}`}
              style={{ color: "var(--sand)" }}
            >
              <div
                className={`${styles.pulsingCircle} js-pulsing-circle`}
              ></div>

              <div className={`${styles.circle} js-circle`}></div>
            </div>
          )}
        </>
      )}
      {/* <div className={styles.n}>{index}</div> */}
    </div>
  );
};

export default Square;

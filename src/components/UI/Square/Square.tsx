import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import DetectedSquare from "./DetectedSquare";
import styles from "./style.module.css";
gsap.registerPlugin(useGSAP);

export interface StreamType {
  type: "legal" | "illegal";
  position: number;
  class?: string;
}

interface SquareProps {
  index: number;
  type?: string;
  stream?: StreamType;
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
          scale: 0.4,
          duration: 1,
          ease: "power1.out",
        })
        .to(".js-pulsing-circle", {
          scale: 0.6,
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
        .to(".js-circle", { opacity: 0, scale: 0.4 });
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
            <div
              className={`${styles.circleWrap} ${stream.class}`}
              style={{ color: "gray", opacity: 0.5 }}
            >
              <div className={`${styles.circle} js-circle`}></div>
            </div>
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
      {/* <div className={styles.n}>C{index}</div> */}
    </div>
  );
};

export default Square;

import React, { use, useRef, useState } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import DetectedSquare from "./DetectedSquare";
import { useGlobalContext } from "../../../context/GlobalContext";

gsap.registerPlugin(useGSAP);
interface SquareProps {
  index: number;
  type?: string;
  stream?: object;
  isDetected?: boolean;
}

const Square: React.FC<SquareProps> = ({ index, stream, isDetected }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  // const [isIllegalStream, setIsIllegalStream] = useState<boolean>(false);
  const { isIllegalStream, setIsIllegalStream } = useGlobalContext();
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
      timeline.current.to(".js-pulsing-circle", { opacity: 0 });
      timeline.current.to(".js-circle", { opacity: 0 });
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
      {stream?.type === "ilegal" && (
        <>
          {isDetected && (
            <DetectedSquare setIsIllegalStream={setIsIllegalStream} />
          )}
          <div
            className={`${styles.circleWrap} ${stream.class}`}
            style={{ color: "var(--sand)" }}
          >
            <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>

            <div className={`${styles.circle} js-circle`}></div>
          </div>
        </>
      )}
      {/* <div className={styles.n}>{index}</div> */}
    </div>
  );
};

export default Square;

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import LegalSquare from "./LegalSquare";
import styles from "./style.module.css";
import SuspiciousSquare from "./SuspiciousSquare";
gsap.registerPlugin(useGSAP);

export interface StreamType {
  type: "legal" | "suspicious";
  position: number;
  class?: string;
}

interface SquareProps {
  index: number;
  type?: string;
  stream?: StreamType;
}

const Square: React.FC<SquareProps> = ({ stream, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const { isIllegalStream } = useGlobalContext();
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
        .to(".js-pulsing-circle", { opacity: 0.16 })
        .to(".js-circle", { opacity: 1, scale: 0.4 });
    },
    { scope: containerRef, dependencies: [isIllegalStream] }
  );

  return (
    <div
      ref={stream?.type ? containerRef : null}
      className={`${styles.wrapper}`}
    >
      {stream?.type === "legal" && <LegalSquare stream={stream} />}
      {stream?.type === "suspicious" && <SuspiciousSquare stream={stream} />}
      <p className={`${styles.n}`}> {index}</p>
    </div>
  );
};

export default Square;

import React, { useRef } from "react";
import styles from "./style.module.css";
import type { StreamType } from "./Square";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import streamsPositionDelays from "../SquareGrid/streamsPositionDelays.consts";
import { useGlobalContext } from "../../../context/GlobalContext";
interface LegalSquareProps {
  stream: StreamType;
}

const LegalSquare: React.FC<LegalSquareProps> = ({ stream }) => {
  const container = useRef<HTMLDivElement>(null);

  const { gridTimeline } = useGlobalContext();
  const found = streamsPositionDelays.find(
    (s) => s.position === stream.position
  );

  const delay = found ? found.delay : 0; // default to 0 if not found

  useGSAP(
    () => {
      if (!gridTimeline) return;
      const tween = gsap.to(container.current, { color: "#62b762" });
      gridTimeline.add(tween, delay);
    },
    { scope: container, dependencies: [gridTimeline] }
  );
  return (
    <div
      ref={container}
      className={`${styles.circleWrap} ${stream.class}`}
      style={{ color: "var(--sand)" }}
    >
      <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
      <div className={`${styles.circle} js-circle`}></div>
    </div>
  );
};

export default LegalSquare;

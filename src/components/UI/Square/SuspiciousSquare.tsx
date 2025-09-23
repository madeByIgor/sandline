import React, { useRef } from "react";
import styles from "./style.module.css";
import type { StreamType } from "./Square";
import streamsPositionDelays from "../SquareGrid/streamsPositionDelays.consts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGlobalContext } from "../../../context/GlobalContext";

interface SuspiciousSquareProps {
  stream: StreamType;
}

const SuspiciousSquare: React.FC<SuspiciousSquareProps> = ({ stream }) => {
  // const [isScanned, setIsScanned] = useState<boolean>(false);
  const found = streamsPositionDelays.find(
    (s) => s.position === stream.position
  );

  const delay = found ? found.delay : 0; // default to 0 if not found
  const container = useRef<HTMLDivElement>(null);

  const {
    gridTimeline,
    squareGridRef,

    setIsIllegalStream,
  } = useGlobalContext();

  useGSAP(
    () => {
      if (!gridTimeline) return;

      const tween = gsap.to(container.current, {
        color: "#ff4053",
        onComplete: () => {
          if (delay === 8.15) {
            gsap.to(squareGridRef.current, {
              scale: 0.8,
              opacity: 0.5,
              duration: 1.5,
              filter: "blur(10px)",
            });

            setIsIllegalStream(true);
          }
        },
      });
      gridTimeline?.add(tween, delay);

      gridTimeline.add(tween, delay);
    },
    { scope: container, dependencies: [gridTimeline] }
  );
  return (
    <div
      ref={container}
      className={`${styles.circleWrap} ${stream.class} js-suspicious-square`}
      style={{ color: "var(--sand)" }}
    >
      <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
      <div className={`${styles.circle} js-circle`}></div>
    </div>
  );
};

export default SuspiciousSquare;

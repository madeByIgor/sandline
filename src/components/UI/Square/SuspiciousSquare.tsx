import React, { useRef } from "react";
import styles from "./style.module.css";
import type { StreamType } from "./Square";
import streamsPositionDelays from "../SquareGrid/streamsPositionDelays.consts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGlobalContext } from "../../../context/GlobalContext";
import qMark from "../../../assets/images/svg/qmark.svg";
interface SuspiciousSquareProps {
  stream: StreamType;
}

const SuspiciousSquare: React.FC<SuspiciousSquareProps> = ({ stream }) => {
  const found = streamsPositionDelays.find(
    (s) => s.position === stream.position
  );

  const delay = found ? found.delay : 0; // default to 0 if not found
  const container = useRef<HTMLDivElement>(null);

  const { gridTimeline, squareGridRef, setIsIllegalStream } =
    useGlobalContext();

  useGSAP(
    () => {
      gsap.set(".js-qmark", {
        scale: 0,
      });
      if (!gridTimeline) return;

      const tween = gsap.to(".js-suspicious-square .js-circle", {
        scale: 0,
        onComplete: () => {
          gsap.to(container.current, {
            color: "#ff4053",
          });
          gsap.to(".js-qmark", {
            scale: 1,
          });
          if (delay === 8.15) {
            gsap.to(squareGridRef.current, {
              scale: 0.8,
              opacity: 0.8,
              duration: 1.5,
              filter: "blur(6px)",
            });

            setIsIllegalStream(true);
          }
        },
      });
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
      <img className="js-qmark" src={qMark} />
    </div>
  );
};

export default SuspiciousSquare;

import React from "react";
import styles from "./style.module.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import DetectedSquare from "./DetectedSquare";
import type { StreamType } from "./Square";

interface IllegalSquareProps {
  isDetected?: boolean;
  stream: StreamType;
}

const IllegalSquare: React.FC<IllegalSquareProps> = ({
  isDetected,
  stream,
}) => {
  const { setIsIllegalStream, heroAniDone } = useGlobalContext();
  return (
    <>
      {isDetected && <DetectedSquare setIsIllegalStream={setIsIllegalStream} />}
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
          <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>

          <div className={`${styles.circle} js-circle`}></div>
        </div>
      )}
    </>
  );
};

export default IllegalSquare;

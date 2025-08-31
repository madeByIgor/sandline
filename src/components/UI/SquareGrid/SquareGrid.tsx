import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import SquareRow from "../SquareRow/SquareRow";
import Scanner from "../Scanner/Scanner";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StreamAnimation from "./StreamAnimation";

gsap.registerPlugin(useGSAP);

interface SquareGridProps {}

const SquareGrid: React.FC<SquareGridProps> = ({}) => {
  const [isStreamDetected, setIsStreamDetected] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  useGSAP(
    () => {
      const deviceWidth = window.innerWidth;
      timeline.current = gsap.timeline({ paused: true });
      timeline.current.to(".js-scanner", {
        duration: 10,
        x: deviceWidth,
        ease: "linear",
      });
      timeline.current.to(
        ".js-stream-illegal",
        {
          color: "var(--red)",
          duration: 0.25,
          delay: 7,
          onComplete: () => setIsStreamDetected(true),
        },
        "<"
      );

      timeline.current.add(StreamAnimation({ className: "js-stream-one" }), 1);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-two" }),
        2.2
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-three" }),
        5
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-four" }),
        5.8
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-five" }),
        7.7
      );
      timeline.current.to(".js-scanner", { opacity: 0 });
      timeline.current.timeScale(1.5);
      timeline.current.play();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className={`${styles.grid} js-square-grid`}>
      <Scanner />
      {/*  */}
      {/*  */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[
          { type: "legal", position: 2, class: "js-stream-one" },
          { type: "legal", position: 12, class: "js-stream-three" },
        ]}
      />
      <SquareRow />
      <SquareRow />
      {/* row with detected pirate stream */}
      <SquareRow
        isDetected={isStreamDetected}
        streams={[{ type: "ilegal", position: 17, class: "js-stream-illegal" }]}
      />
      {/* central row */}
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[{ type: "legal", position: 14, class: "js-stream-four" }]}
      />
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[
          { type: "legal", position: 5, class: "js-stream-two" },
          { type: "legal", position: 19, class: "js-stream-five" },
        ]}
      />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
    </div>
  );
};

export default SquareGrid;

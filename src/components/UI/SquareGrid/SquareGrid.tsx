import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import SquareRow from "../SquareRow/SquareRow";
import Scanner from "../Scanner/Scanner";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StreamAnimation from "./StreamAnimation";

import { useGlobalContext } from "../../../context/GlobalContext";
import Map from "../Map/Map";

gsap.registerPlugin(useGSAP);

interface SquareGridProps {}

const SquareGrid: React.FC<SquareGridProps> = ({}) => {
  const [isStreamDetected, setIsStreamDetected] = useState<boolean>(false);

  const timeline = useRef<GSAPTimeline | null>(null);
  const { squareGridRef } = useGlobalContext();

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
          duration: 0.26,
          delay: 7,
          onComplete: () => setIsStreamDetected(true),
        },
        "<"
      );

      timeline.current.add(
        StreamAnimation({ className: "js-stream-one" }),
        7.8
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-two" }),
        6.2
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-three" }),
        5.8
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-four" }),
        5.8
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-five" }),
        8.5
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-12" }), 5);
      timeline.current.add(StreamAnimation({ className: "js-stream-18" }), 7.5);
      timeline.current.add(StreamAnimation({ className: "js-stream-20" }), 8.2);
      timeline.current.to(".js-scanner", { opacity: 0 });

      timeline.current.timeScale(1.5);
      timeline.current.play();
    },
    { scope: squareGridRef }
  );

  function handleClick() {}
  return (
    <div
      ref={squareGridRef}
      className={`${styles.grid} js-square-grid`}
      onClick={handleClick}
    >
      <Scanner />
      <Map />
      {/*  */}
      {/*  */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[
          { type: "legal", position: 19, class: "js-stream-one" },
          { type: "legal", position: 14, class: "js-stream-three" },
        ]}
      />
      <SquareRow />
      {/* row with detected pirate stream */}
      <SquareRow
        isDetected={isStreamDetected}
        streams={[
          { type: "illegal", position: 17, class: "js-stream-illegal" },
        ]}
      />
      {/* central row */}
      <SquareRow
        streams={[
          { type: "legal", position: 12, class: "js-stream-12" },
          { type: "legal", position: 20, class: "js-stream-20" },
        ]}
      />
      <SquareRow
        streams={[{ type: "legal", position: 18, class: "js-stream-18" }]}
      />
      <SquareRow
      // streams={[{ type: "legal", position: 14, class: "js-stream-four" }]}
      />{" "}
      <SquareRow
        streams={[
          { type: "legal", position: 15, class: "js-stream-two" },
          { type: "legal", position: 21, class: "js-stream-five" },
        ]}
      />
      <SquareRow /> <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
    </div>
  );
};

export default SquareGrid;

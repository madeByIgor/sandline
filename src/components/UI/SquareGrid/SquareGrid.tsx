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

      timeline.current.add(StreamAnimation({ className: "js-stream-5" }), 3.65);
      timeline.current.add(StreamAnimation({ className: "js-stream-6" }), 3.8);
      timeline.current.add(StreamAnimation({ className: "js-stream-8" }), 4.1);
      timeline.current.add(StreamAnimation({ className: "js-stream-9" }), 4.25);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-11" }),
        4.55
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-12" }), 4.7);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-15" }),
        5.15
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-16" }), 5.3);
      timeline.current.add(StreamAnimation({ className: "js-stream-18" }), 5.6);
      timeline.current.add(StreamAnimation({ className: "js-stream-27" }), 6.8);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-28" }),
        6.95
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-30" }),
        7.25
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-31" }), 7.4);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-32" }),
        7.55
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-33" }), 7.7);
      timeline.current.add(
        StreamAnimation({ className: "js-stream-34" }),
        7.85
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-36" }),
        8.15
      );
      timeline.current.add(
        StreamAnimation({ className: "js-stream-38" }),
        8.45
      );
      timeline.current.add(StreamAnimation({ className: "js-stream-39" }), 8.6);

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
      <SquareRow
        streams={[
          { type: "legal", position: 36, class: "js-stream-36" },
          { type: "legal", position: 32, class: "js-stream-32" },
          { type: "legal", position: 30, class: "js-stream-30" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 34, class: "js-stream-34" },
          { type: "legal", position: 39, class: "js-stream-39" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 8, class: "js-stream-8" },
          { type: "legal", position: 11, class: "js-stream-11" },
          { type: "legal", position: 38, class: "js-stream-38" },
          { type: "legal", position: 30, class: "js-stream-30" },
          { type: "legal", position: 31, class: "js-stream-31" },
        ]}
      />
      <SquareRow
        isDetected={isStreamDetected}
        streams={[
          { type: "illegal", position: 28, class: "js-stream-illegal" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 6, class: "js-stream-6" },
          { type: "legal", position: 11, class: "js-stream-11" },
          { type: "legal", position: 28, class: "js-stream-28" },
          { type: "legal", position: 30, class: "js-stream-30" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 5, class: "js-stream-5" },
          { type: "legal", position: 27, class: "js-stream-27" },
          { type: "legal", position: 34, class: "js-stream-34" },
        ]}
      />
      <SquareRow
        streams={[{ type: "legal", position: 8, class: "js-stream-8" }]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 9, class: "js-stream-9" },
          { type: "legal", position: 12, class: "js-stream-12" },
        ]}
      />
      <SquareRow />
      <SquareRow
        streams={[
          {
            type: "legal",
            position: 8,
            class: "js-stream-8",
          },
        ]}
      />
      {/* row with detected pirate stream */}
      <SquareRow />
      {/* central row */}
      <SquareRow />
      <SquareRow />
      <SquareRow
      // streams={[{ type: "legal", position: 14, class: "js-stream-four" }]}
      />{" "}
      <SquareRow
        streams={[{ type: "legal", position: 15, class: "js-stream-15" }]}
      />
      <SquareRow
        streams={[{ type: "legal", position: 18, class: "js-stream-18" }]}
      />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[
          { type: "legal", position: 16, class: "js-stream-16" },
          { type: "legal", position: 33, class: "js-stream-33" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 15, class: "js-stream-15" },
          { type: "legal", position: 32, class: "js-stream-32" },
        ]}
      />
      <SquareRow />
    </div>
  );
};

export default SquareGrid;

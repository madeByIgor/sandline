import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useState } from "react";
import Scanner from "../Scanner/Scanner";
import SquareRow from "../SquareRow/SquareRow";
import styles from "./style.module.css";

import { useGlobalContext } from "../../../context/GlobalContext";
import Map from "../Map/Map";

gsap.registerPlugin(useGSAP);

interface SquareGridProps {}

const SquareGrid: React.FC<SquareGridProps> = ({}) => {
  const [isStreamDetected] = useState<boolean>(false);

  // const timeline = useRef<GSAPTimeline | null>(null);
  const { squareGridRef, gridTimeline, setGridTimeline, heroAniDone } =
    useGlobalContext();

  useGSAP(() => {
    // const deviceWidth = window.innerWidth;
    const gridTl = gsap.timeline({ paused: true });

    setGridTimeline(gridTl);
  });

  useGSAP(
    () => {
      if (!gridTimeline) return;
      const deviceWidth = window.innerWidth;
      const tl = gsap.timeline({});
      tl.to(
        ".js-scanner",
        {
          duration: 10,
          x: deviceWidth,
          ease: "linear",
        },
        0
      ).to(".js-scanner", { opacity: 0 });
      gridTimeline.add(tl, 0);
      gridTimeline.add(
        gsap.to(".js-stream-illegal", {
          color: "#ff4053",
        }),
        6.95
      );
      gridTimeline.play();

      gridTimeline.timeScale(1.5);
    },
    { scope: squareGridRef, dependencies: [gridTimeline] }
  );

  useGSAP(
    () => {
      if (!heroAniDone) return;
      const tl = gsap.timeline({ delay: 0.75 });
      const tl2 = gsap.timeline({ repeat: -1 });

      gsap.to(".js-legal-stream .js-circle", { opacity: 1, scale: 1 });
      gsap.set(".js-legal-stream .js-pulsing-circle", {
        scale: 0,
        transformOrigin: "50% 50%",
      });
      tl2
        .to(".js-legal-stream .js-pulsing-circle", {
          opacity: 0.16,
          scale: 0.4,
        })
        .to(".js-legal-stream .js-pulsing-circle", {
          scale: 0.6,
          opacity: 0,
          ease: "power1.out",
          duration: 0.25,
        });

      tl.to(".js-suspicious-square .js-qmark", { opacity: 0, scale: 0 })
        .to(".js-suspicious-square", {
          color: "#ff4053",
        })
        .to(".js-suspicious-square .js-circle", { opacity: 1, scale: 1 })
        .to(".js-suspicious-square .js-pulsing-circle", {
          scale: 1,
          opacity: 0.3,
          ease: "linear",
        })
        .to(".js-suspicious-square .js-pulsing-circle", {
          scale: 2,
          opacity: 0,
          stagger: {
            each: 0.05,
            from: "center",
          },
        })
        .to(
          ".js-suspicious-square",
          {
            color: "gray",
            stagger: {
              each: 0.05,
              from: "center",
            },
          },
          "<"
        );
    },
    { scope: squareGridRef, dependencies: [heroAniDone] }
  );

  return (
    <div ref={squareGridRef} className={`${styles.grid} js-square-grid`}>
      <Scanner />
      <Map />
      {/*  */}
      <SquareRow
        streams={[
          { type: "suspicious", position: 36, class: "js-stream-36" },
          { type: "legal", position: 32, class: "js-stream-32" },
          { type: "suspicious", position: 30, class: "js-stream-30" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 34, class: "js-stream-34" },
          { type: "suspicious", position: 39, class: "js-stream-39" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "suspicious", position: 8, class: "js-stream-8" },
          { type: "legal", position: 11, class: "js-stream-11" },
          { type: "suspicious", position: 27, class: "js-stream-27" },
          { type: "legal", position: 38, class: "js-stream-38" },
          { type: "legal", position: 30, class: "js-stream-30" },
          { type: "suspicious", position: 31, class: "js-stream-31" },
        ]}
      />
      <SquareRow
        isDetected={isStreamDetected}
        streams={[{ type: "suspicious", position: 28, class: "js-stream-28" }]}
      />
      <SquareRow
        streams={[
          { type: "suspicious", position: 6, class: "js-stream-6" },
          { type: "suspicious", position: 11, class: "js-stream-11" },
          { type: "suspicious", position: 28, class: "js-stream-28" },
          { type: "suspicious", position: 30, class: "js-stream-30" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "suspicious", position: 5, class: "js-stream-5" },
          { type: "legal", position: 12, class: "js-stream-12" },
          { type: "suspicious", position: 27, class: "js-stream-27" },
          { type: "suspicious", position: 34, class: "js-stream-34" },
        ]}
      />
      <SquareRow
        streams={[{ type: "legal", position: 8, class: "js-stream-8" }]}
      />
      <SquareRow
        streams={[
          { type: "suspicious", position: 9, class: "js-stream-9" },
          { type: "suspicious", position: 12, class: "js-stream-12" },
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
        streams={[{ type: "suspicious", position: 15, class: "js-stream-15" }]}
      />
      <SquareRow
        streams={[{ type: "suspicious", position: 18, class: "js-stream-18" }]}
      />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow
        streams={[
          { type: "legal", position: 16, class: "js-stream-16" },
          { type: "suspicious", position: 33, class: "js-stream-33" },
        ]}
      />
      <SquareRow
        streams={[
          { type: "legal", position: 15, class: "js-stream-15" },
          { type: "suspicious", position: 32, class: "js-stream-32" },
        ]}
      />
      <SquareRow />
    </div>
  );
};

export default SquareGrid;

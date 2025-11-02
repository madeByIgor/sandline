import Scanner from "../Scanner/Scanner";
import SquareRow from "../SquareRow/SquareRow";
import styles from "./style.module.css";

import { useGlobalContext } from "../../../context/GlobalContext";
import Map from "../Map/Map";
import type { StreamType } from "../Square/Square";
import { useMapAnimation } from "./Animation/useMapAnimation";

const stream = (
  type: StreamType["type"],
  position: number,
  className?: string
): StreamType => ({
  type,
  position,
  class: className ?? `js-stream-${position}`,
});

const GRID_ROWS: Array<StreamType[] | undefined> = [
  [stream("suspicious", 36), stream("legal", 32), stream("suspicious", 30)],
  [stream("legal", 34), stream("suspicious", 39)],
  [
    stream("suspicious", 8),
    stream("legal", 11),
    stream("suspicious", 27),
    stream("legal", 38),
    stream("legal", 30),
    stream("suspicious", 31),
  ],
  [stream("suspicious", 28)],
  [
    stream("suspicious", 6),
    stream("suspicious", 11),
    stream("suspicious", 28),
    stream("suspicious", 30),
  ],
  [
    stream("suspicious", 5),
    stream("legal", 12),
    stream("suspicious", 27),
    stream("suspicious", 34),
  ],
  [stream("legal", 8)],
  [stream("suspicious", 9), stream("suspicious", 12)],
  undefined,
  [stream("legal", 8)],
  undefined,
  undefined, // central row
  undefined,
  undefined,
  [stream("suspicious", 15)],
  [stream("suspicious", 18)],
  undefined,
  undefined,
  undefined,
  undefined,
  [stream("legal", 16), stream("suspicious", 33)],
  [stream("legal", 15), stream("suspicious", 32)],
  undefined,
];

const SquareGrid = () => {
  const { squareGridRef, gridTimeline, setGridTimeline, heroAniDone } =
    useGlobalContext();

  useMapAnimation({
    scopeRef: squareGridRef,
    timeline: gridTimeline,
    setTimeline: setGridTimeline,
    heroAniDone,
  });

  return (
    <div ref={squareGridRef} className={`${styles.grid} js-square-grid`}>
      <Scanner />
      <Map />
      {GRID_ROWS.map((streams, index) => (
        <SquareRow key={index} streams={streams} />
      ))}
    </div>
  );
};

export default SquareGrid;

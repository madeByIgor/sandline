import React from "react";
import styles from "./style.module.css";
import Square from "../Square/Square";
import type { StreamType } from "../Square/Square";
interface SquareRowProps {
  color?: string;
  streams?: StreamType[];
  isDetected?: boolean;
}

const SquareRow: React.FC<SquareRowProps> = ({
  color,
  streams,
  isDetected,
}) => {
  return (
    <div className={`${styles.row}`} style={{ backgroundColor: color }}>
      {new Array(50).fill(0).map((_, i) => {
        const streamPosition = streams?.find((stream) => i === stream.position);
        if (streamPosition) {
          return (
            <Square
              key={i}
              index={i}
              stream={streamPosition}
              isDetected={isDetected}
            />
          );
        } else {
          return <Square key={i} index={i} />;
        }
      })}
    </div>
  );
};

export default SquareRow;

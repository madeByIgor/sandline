import React from "react";
import styles from "./style.module.css";
import Square from "../Square/Square";
import type { StreamType } from "../Square/Square";
interface SquareRowProps {
  streams?: StreamType[];
}

const SquareRow: React.FC<SquareRowProps> = ({ streams }) => {
  return (
    <div className={`${styles.row}`}>
      {new Array(50).fill(0).map((_, i) => {
        const streamPosition = streams?.find((stream) => i === stream.position);
        if (streamPosition) {
          return <Square key={i} index={i} stream={streamPosition} />;
        } else {
          return <Square key={i} index={i} />;
        }
      })}
    </div>
  );
};

export default SquareRow;

import React from "react";
import styles from "./style.module.css";
import Square from "../Square/Square";

interface SquareRowProps {
  color?: string;
  streams?: object;
  isDetected?: boolean;
}

const SquareRow: React.FC<SquareRowProps> = ({
  color,
  streams,
  isDetected,
}) => {
  console.log(streams);
  return (
    <div className={`${styles.row}`} style={{ backgroundColor: color }}>
      {new Array(25).fill(0).map((_, i) => {
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

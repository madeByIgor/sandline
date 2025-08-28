import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Square from "../Square/Square";
interface SquareGridProps {}

const SquareGrid: React.FC<SquareGridProps> = ({}) => {
  const [squares, setSquares] = useState<number | null>(null);
  const [squareSize, setSquareSize] = useState<number | null>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const squareLength = screenWidth / 24;
    const squareRowsAmount = Math.ceil(screenHeight / squareLength);
    const squaresAmount = 24 * squareRowsAmount;

    setSquareSize(squareLength);
    setSquares(squaresAmount);
  }, []);

  return (
    <div
      className={`${styles.grid} ffff`}
      style={{
        gridTemplateRows: `repeat(${squares}, ${squareSize}px)`,
      }}
    >
      {new Array(squares).fill(0).map((_, index) => (
        <Square key={index} index={index} />
      ))}
    </div>
  );
};

export default SquareGrid;

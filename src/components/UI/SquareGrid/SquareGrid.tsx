import React from "react";
import styles from "./style.module.css";
import SquareRow from "../SquareRow/SquareRow";

interface SquareGridProps {}

const SquareGrid: React.FC<SquareGridProps> = ({}) => {
  return (
    <div className={styles.grid}>
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
      {/* 2, 12 fill */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      {/* row with detected pirate stream */}
      <SquareRow streams={[{ type: "ilegal", position: 18 }]} />
      {/* central row */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      {/* 13 fill */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      {/* 5, 19 fill */}
      <SquareRow />
      <SquareRow />
      <SquareRow />
      <SquareRow />
    </div>
  );
};

export default SquareGrid;

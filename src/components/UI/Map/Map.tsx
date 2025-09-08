import React from "react";
import styles from "./style.module.css";

import imgMap from "../../../assets/images/svg/map.svg";
interface MapProps {}

const Map: React.FC<MapProps> = ({}) => {
  return (
    <div className={`${styles.mapWrapper}`}>
      <div className={`${styles.space}`}></div>
      <div className={`${styles.map}`}>
        <img src={imgMap} />
      </div>
    </div>
  );
};

export default Map;

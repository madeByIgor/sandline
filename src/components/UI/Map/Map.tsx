import React from "react";
import styles from "./style.module.css";

import imgMap from "../../../assets/images/svg/world-map.svg";
import { useGlobalContext } from "../../../context/GlobalContext";
interface MapProps {}

const Map: React.FC<MapProps> = ({}) => {
  const { mapRef } = useGlobalContext();
  return (
    <div ref={mapRef} className={`${styles.mapWrapper} js-map`}>
      {/* <div className={`${styles.space}`}></div> */}
      <div className={`${styles.map}`}>
        <img src={imgMap} />
      </div>
    </div>
  );
};

export default Map;

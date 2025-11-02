import { useRef } from "react";
import styles from "./style.module.css";

import { useGlobalContext } from "../../../context/GlobalContext";
import ILLEGAL_ACTIVITIES from "./Animation/illegal-activities.constants";
import { useHeroDefendAnimation } from "./Animation/useHeroDefendAnimation";
import DefendItem from "./DefendItem";

const HomeHeroDefend = () => {
  const { squareGridRef, setHeroAniDone } = useGlobalContext();
  const container = useRef(null);

  useHeroDefendAnimation({
    scopeRef: container,
    setAnimation: setHeroAniDone,
    mapRef: squareGridRef,
    content: ILLEGAL_ACTIVITIES,
  });

  return (
    <div ref={container} className={`${styles.wrapper}`}>
      <div className={`${styles.tag} js-tag`}>Illegal activites detected</div>
      <div className={`${styles.defendItems} js-defend-items`}>
        <DefendItem />
        <DefendItem />
        <DefendItem />
        <DefendItem />
        <DefendItem />
        <DefendItem />
      </div>
    </div>
  );
};

export default HomeHeroDefend;

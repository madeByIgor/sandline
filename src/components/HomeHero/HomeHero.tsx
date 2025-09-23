import React from "react";
import styles from "./style.module.css";
import Button from "../UI/Button/Button";
import { useGlobalContext } from "../../context/GlobalContext";

import HomeHeroDefend from "./HomeHeroDefend/HomeHeroDefend";

interface HomeHeroProps {}

const HomeHero: React.FC<HomeHeroProps> = ({}) => {
  const { isIllegalStream, squareFullScreenRef } = useGlobalContext();
  return (
    <>
      <div
        ref={squareFullScreenRef}
        className={`${styles.squareFullScreen}`}
      ></div>
      <section className={`${styles.wrapper}`}>
        <div className={`${styles.inner}`}>
          <div className={`${styles.content}`}>
            <h1 className={styles.heading}>
              We are <br />
              <span className="highlight">digital privateers.</span>
            </h1>
            <p className={styles.description}>
              Sandline is a full-service solution for detecting, verifying, and
              disrupting digital piracy — at scale, in real time.
            </p>
            <div className={`${styles.cta}`}>
              <Button variant="secondary">Book a call</Button>
              <Button>How it works</Button>
            </div>
          </div>
          <div className={`${styles.skullWrapper}`}>
            {isIllegalStream && <HomeHeroDefend />}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;

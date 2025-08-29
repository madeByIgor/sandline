import React from "react";
import styles from "./style.module.css";

interface HomeHeroProps {}

const HomeHero: React.FC<HomeHeroProps> = ({}) => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.content}`}>
          <h1>Meet the digital privateers of sandline</h1>
          <p>
            full-service solution for detecting, verifying, and disrupting
            digital piracy — at scale, in real time.
          </p>
          <div className={`${styles.cta}`}></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

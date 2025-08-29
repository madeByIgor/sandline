import React from "react";
import styles from "./style.module.css";
import Button from "../UI/Button/Button";

interface HomeHeroProps {}

const HomeHero: React.FC<HomeHeroProps> = ({}) => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.content}`}>
          <h1 className={styles.heading}>
            Meet the{" "}
            <span className="highlight">
              digital <br /> privateers
            </span>{" "}
            of sandline
          </h1>
          <p className={styles.description}>
            Sandline is a full-service solution for detecting, verifying, and
            disrupting digital piracy — at scale, in real time.
          </p>
          <div className={`${styles.cta}`}>
            <Button>Book a call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

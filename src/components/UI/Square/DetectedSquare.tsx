import React, { useRef, type Dispatch, type SetStateAction } from "react";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin, TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrambleTextPlugin, TextPlugin);
interface DetectedSquareProps {
  setIsIllegalStream: Dispatch<SetStateAction<boolean>>;
}

const DetectedSquare: React.FC<DetectedSquareProps> = ({
  setIsIllegalStream,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(".js-detected-tag", {
        duration: 1,
        scrambleText: {
          text: "Suspicious stream",
          speed: 0.3,
        },
      })
        .to(".js-detected-tag", {
          duration: 1,
          delay: 1,
          scrambleText: {
            text: "Analyzing",
            speed: 1,
          },
        })
        .to(".js-detected-tag", {
          duration: 1,
          delay: 1,
          scrambleText: {
            text: "Illegal stream detected",
            speed: 1,
          },
          onComplete: () => {
            setIsIllegalStream(true);
          },
        });
      tl.play();
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className={styles.detectedTag}>
        <div className={`${styles.detectedText} js-detected-tag`}></div>
      </div>
    </div>
  );
};

export default DetectedSquare;

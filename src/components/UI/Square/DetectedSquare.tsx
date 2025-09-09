import React, { useRef, type Dispatch, type SetStateAction } from "react";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip, ScrambleTextPlugin, TextPlugin } from "gsap/all";
import { useGlobalContext } from "../../../context/GlobalContext";
gsap.registerPlugin(ScrambleTextPlugin, TextPlugin, Flip);
interface DetectedSquareProps {
  setIsIllegalStream: Dispatch<SetStateAction<boolean>>;
}

const DetectedSquare: React.FC<DetectedSquareProps> = ({
  setIsIllegalStream,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { squareGridRef, squareFullScreenRef } = useGlobalContext();
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
            text: "",
            speed: 1,
          },
          onComplete: () => {
            setIsIllegalStream(true);
            gsap.to(".js-map", {
              opacity: 0,
            });
            Flip.fit(squareGridRef.current, squareFullScreenRef.current, {
              ease: "power1.inOut",
              fitChild: `.js-stream-illegal`,
              duration: 2,
            });
          },
        })

        .set(
          ".js-detected-tag-wrapper",
          { opacity: 0, duration: 0.25 },
          "-=0.7"
        );
      tl.play();
    },
    { scope: squareGridRef }
  );
  return (
    <div ref={containerRef}>
      <div className={`${styles.detectedTag} js-detected-tag-wrapper`}>
        <div className={`${styles.detectedText} js-detected-tag`}></div>
      </div>
    </div>
  );
};

export default DetectedSquare;

import React, { use, useRef, useState } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import DetectedSquare from "./DetectedSquare";

gsap.registerPlugin(useGSAP);
interface SquareProps {
  index: number;
  type?: string;
  stream?: object;
  isDetected?: boolean;
}

const Square: React.FC<SquareProps> = ({ index, stream, isDetected }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const [isIllegalStream, setIsIllegalStream] = useState<boolean>(false);
  useGSAP(
    () => {
      if (!stream?.type) return;
      gsap.set(".js-pulsing-circle", { scale: 0, transformOrigin: "50% 50%" });

      timeline.current = gsap
        .timeline({ repeat: -1 })
        .to(".js-pulsing-circle", {
          scale: 0.6,
          duration: 1,
          ease: "power1.out",
        })
        .to(".js-pulsing-circle", {
          scale: 0.8,
          opacity: 0,
          ease: "power1.out",
          duration: 0.25,
        });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      if (!isIllegalStream) return;
      if (!timeline.current) return;

      timeline.current.kill();
      // gsap.set(".js-circle-inner", { opacity: 0 });

      timeline.current = gsap.timeline();
      timeline.current
        .to(".js-pulsing-circle", { scale: 0 })
        .to(".js-circle", {
          ease: "power1.out",
          borderRadius: 0,
          width: 1,
          height: 82,
          top: 0,
          yPercent: 0,
        })
        .to(".js-circle", {
          ease: "power1.out",
          width: 278,
          backgroundColor: "var(--transparentBlack)",
          backdropFilter: "blur(2px)",
        })
        .to(".js-text-1", { scrambleText: { text: "Node ID:" } })
        .to(".js-text-2", { scrambleText: { text: "#A45X-92" } }, "-=0.4")
        .to(".js-text-3", { scrambleText: { text: "Activity:" } }, "-=0.4")
        .to(
          ".js-text-4",
          {
            scrambleText: { text: "4,392 unauthorized views" },
          },
          "-=0.4"
        )
        .to(".js-text-5", { scrambleText: { text: "Integrity:" } }, "-=0.4")
        .to(
          ".js-text-6",
          { scrambleText: { text: "Compromised CDN node" } },
          "-=0.4"
        );
    },
    { scope: containerRef, dependencies: [isIllegalStream] }
  );
  return (
    <div
      ref={stream?.type ? containerRef : null}
      className={`${styles.wrapper} ${
        isDetected ? styles.detectedWrapper : ""
      }`}
    >
      {stream?.type === "legal" && (
        <div
          className={`${styles.circleWrap} ${stream.class}`}
          style={{ color: "var(--sand)" }}
        >
          <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>
          <div className={`${styles.circle} js-circle`}></div>
        </div>
      )}
      {stream?.type === "ilegal" && (
        <>
          {isDetected && (
            <DetectedSquare setIsIllegalStream={setIsIllegalStream} />
          )}
          <div
            className={`${styles.circleWrap} ${stream.class}`}
            style={{ color: "var(--sand)" }}
          >
            <div className={`${styles.pulsingCircle} js-pulsing-circle`}></div>

            <div className={`${styles.circle} js-circle`}>
              {isIllegalStream && (
                <div className={`${styles.circleInner} js-circle-inner`}>
                  <div className={`${styles.circleInnerRow}`}>
                    <p className="js-text-1"></p>
                    <p className="js-text-2"></p>
                  </div>
                  <div className={`${styles.circleInnerRow}`}>
                    <p className="js-text-3"></p>
                    <p className="js-text-4"></p>
                  </div>
                  <div className={`${styles.circleInnerRow}`}>
                    <p className="js-text-5"></p>
                    <p className="js-text-6"></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {/* <div className={styles.n}>{index}</div> */}
    </div>
  );
};

export default Square;

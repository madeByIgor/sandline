import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Corner from "../UI/Corner/Corner";
import Scanner from "../UI/Scanner/Scanner";
import TagInfo from "../UI/TagInfo/TagInfo";

import HomeHeroSkullSvg from "./HomeHeroSkullSvg";
import styles from "./style.module.css";
import HomeHeroInfoBox from "./HomeHeroInfoBox";
interface HomeHeroSkullProps {}

const HomeHeroSkull: React.FC<HomeHeroSkullProps> = ({}) => {
  const {
    skullTargetSlotRef,
    squareGridRef,
    heroAniDone,
    setHeroAniDone,
    mapRef,
  } = useGlobalContext();
  const tl = useRef<GSAPTimeline | null>(null);
  const skullRectangleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!skullRectangleRef.current) return;
      const skullRectangleWidth = skullRectangleRef.current.offsetWidth;
      gsap.set(".js-home-info-box", {
        opacity: 0,
      });

      gsap.set(".js-hero-skull-img-wrap .svg-top path", {
        transformOrigin: "50% 50%",
      });
      gsap.set(
        ".js-hero-skull-img-wrap, .js-tag, .js-circle-lines, .js-circle-dots",
        {
          opacity: 0,
        }
      );
      gsap.to(".js-circle-lines", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(".js-circle-dots", {
        rotate: -360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
      gsap.set(".js-scanner", {
        scaleY: 0,
      });

      tl.current = gsap.timeline();
      tl.current
        .to(".js-corner", {
          "--size": "40px",
          delay: 1.5,
          duration: 0.6,
          stagger: 0.1,
        })
        .to(
          ".js-circle-lines, .js-circle-dots",
          {
            opacity: 1,
            stagger: 0.3,
          },
          "-=0.8"
        )
        .to(
          ".js-hero-skull-img-wrap",
          {
            opacity: 1,
          },
          "-=0.5"
        )
        .set(
          ".js-tag",
          {
            opacity: 1,
          },
          "-=1"
        )
        .to(
          ".js-tag",
          {
            duration: 1,
            scrambleText: {
              text: "Running deep scan",
            },
          },
          "<"
        )
        .to(".js-scanner", {
          scaleY: 1,
          duration: 0.6,
        })
        .to(".js-scanner", {
          x: skullRectangleWidth - 1,
          duration: 1.95,
          yoyo: true,
          ease: "power1.inOut",
          repeat: 3,
          onComplete: () => {
            gsap.to(".js-scanner", { opacity: 0, duration: 0.25 });
          },
        })
        .to(
          ".js-hero-skull-img-wrap svg path",
          {
            fill: "var(--red)",
          },
          "-=0.5"
        )
        .set(
          ".js-tag",
          {
            "--bg": "var(--red)",
          },
          "-=0.3"
        )
        .to(
          ".js-tag",
          {
            duration: 1,
            scrambleText: {
              text: "Illegal stream detected",
            },
          },
          "<"
        )
        .to(".js-tag", {
          duration: 1,
          delay: 0.7,
          scrambleText: {
            text: "Taking down stream...",
          },
        })
        .to(
          ".js-hero-skull-img-wrap path",
          {
            delay: 0.3,
            duration: 1.5,
            y: gsap.utils.random(400, 650, 25, true),
            rotate: gsap.utils.random(-12, 12, 1, true),
          },
          "-=0.3"
        )
        .to(
          ".js-hero-skull-img-wrap path",
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.4"
        )
        .to(
          ".js-circle-dots, .js-circle-lines",
          {
            opacity: 0,
            scale: 0.5,
            stagger: 0.1,
          },
          "-=0.7"
        )
        .set(
          ".js-tag",
          {
            "--bg": "var(--green)",
          },
          "-=0.2"
        )
        .to(
          ".js-tag",
          {
            duration: 1,
            scrambleText: {
              text: "Illegal stream taken down",
            },
          },
          "<"
        )
        .set(
          ".js-home-info-box",
          {
            opacity: 1,
          },
          "-=1"
        )
        .to(
          ".js-home-info-title",
          {
            scrambleText: "Protected by Sandline",
          },
          "-=1"
        )
        .to(
          ".js-home-info-text-1",
          {
            scrambleText: "Node id:",
          },
          "-=0.28"
        )
        .to(
          ".js-home-info-text-2",
          {
            scrambleText: "#a45x-92",
          },
          "-=0.28"
        )
        .to(
          ".js-home-info-text-3",
          {
            scrambleText: "activity:",
          },
          "-=0.28"
        )
        .to(
          ".js-home-info-text-4",
          {
            scrambleText: "4,392 unauthorized views",
          },
          "-=0.28"
        )
        .to(
          ".js-home-info-text-5",
          {
            scrambleText: "integrity:",
          },
          "-=0.28"
        )
        .to(
          ".js-home-info-text-6",
          {
            scrambleText: "compromised cdn node",
          },
          "-=0.28"
        )

        .to(".js-tag", {
          delay: 1.5,
          scrambleText: {
            text: "X",
          },
        })
        .to(
          ".js-home-info-box p",
          {
            scrambleText: "",
          },
          "-=0.7"
        )
        .set(".js-tag", {
          opacity: 0,
        })
        .to(".js-corner", {
          "--size": "0px",
        })
        .to(squareGridRef.current, {
          x: 0,
          yPercent: -50,
          y: 0,
          scale: 1,
          width: "",
          height: "",
          duration: 1,
          ease: "expo.out",
          onComplete: () => {
            setHeroAniDone(true);
          },
        })
        .to(
          mapRef.current,
          {
            opacity: 1,
          },
          "<"
        );
    },
    { scope: skullTargetSlotRef }
  );

  useGSAP(
    () => {
      if (!heroAniDone) return;

      gsap.set(".js-pulsing-circle", {
        scale: 0,
        transformOrigin: "50% 50%",
        opacity: 0.16,
      });

      gsap.to(".js-circle", { opacity: 1, scale: 1 });
      gsap.to(squareGridRef.current, {
        duration: 0.5,
      });
      gsap
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
    { scope: squareGridRef, dependencies: [heroAniDone] }
  );
  return (
    <div ref={skullTargetSlotRef} className={`${styles.skullInner}`}>
      <div className={styles.illegalStreamRectangle}>
        <Corner size={0} />
        <Corner size={0} position="top-right" />
        <Corner size={0} position="bottom-left" />
        <Corner size={0} position="bottom-right" />
        <TagInfo classNames={`${styles.tag} js-tag`} text="X" />
      </div>

      <div ref={skullRectangleRef} className={styles.skullRectangle}>
        <Corner size={0} />
        <Corner size={0} position="top-right" />
        <Corner size={0} position="bottom-left" />
        <Corner size={0} position="bottom-right" />
        <div className={`${styles.skullCircleDots} js-circle-dots`}></div>
        <div className={`${styles.skullCircleLines} js-circle-lines`}></div>
        <Scanner height="100%" />
        <div className={`js-hero-skull-img-wrap`}>
          <HomeHeroSkullSvg />
        </div>
        <HomeHeroInfoBox />
      </div>
      {/*  */}
    </div>
  );
};

export default HomeHeroSkull;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface UseMapAnimationProps {
  scopeRef: React.RefObject<HTMLElement | null>;
  timeline: gsap.core.Timeline | null;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline | null>>;
  heroAniDone: boolean;
}
export const useMapAnimation = ({
  scopeRef,
  timeline,
  setTimeline,
  heroAniDone,
}: UseMapAnimationProps) => {
  useGSAP(() => {
    const mapTl = gsap.timeline({ paused: true });
    setTimeline(mapTl);
  });

  useGSAP(
    () => {
      if (!timeline) return;
      const deviceWidth = window.innerWidth;
      const tl = gsap.timeline({});
      tl.to(
        ".js-scanner",
        {
          duration: 10,
          x: deviceWidth,
          ease: "linear",
        },
        0
      ).to(".js-scanner", { opacity: 0 });

      timeline.add(tl, 0);
      timeline.play();
      timeline.timeScale(1.5);
    },
    { scope: scopeRef, dependencies: [timeline] }
  );

  useGSAP(
    () => {
      if (!heroAniDone) return;
      const tl = gsap.timeline({ delay: 0.75 });
      const tl2 = gsap.timeline({ repeat: -1 });

      gsap.to(".js-legal-stream .js-circle", { opacity: 1, scale: 1 });
      gsap.set(".js-legal-stream .js-pulsing-circle", {
        scale: 0,
        transformOrigin: "50% 50%",
      });
      tl2
        .to(".js-legal-stream .js-pulsing-circle", {
          opacity: 0.16,
          scale: 0.4,
        })
        .to(".js-legal-stream .js-pulsing-circle", {
          scale: 0.6,
          opacity: 0,
          ease: "power1.out",
          duration: 0.25,
        });

      tl.to(".js-suspicious-square .js-qmark", { opacity: 0, scale: 0 })
        .to(".js-suspicious-square", {
          color: "#ff4053",
        })
        .to(".js-suspicious-square .js-circle", { opacity: 1, scale: 1 })
        .to(".js-suspicious-square .js-pulsing-circle", {
          scale: 1,
          opacity: 0.3,
          ease: "linear",
        })
        .to(".js-suspicious-square .js-pulsing-circle", {
          scale: 2,
          opacity: 0,
          stagger: {
            each: 0.05,
            from: "center",
          },
        })
        .to(
          ".js-suspicious-square",
          {
            color: "gray",
            stagger: {
              each: 0.05,
              from: "center",
            },
          },
          "<"
        );
    },
    { scope: scopeRef, dependencies: [heroAniDone] }
  );
};

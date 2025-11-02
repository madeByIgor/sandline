import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
gsap.registerPlugin(ScrambleTextPlugin);

interface UseHeroDefendAnimationProps {
  scopeRef: React.RefObject<HTMLElement | null>;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  mapRef: React.RefObject<HTMLElement | null>;
  content: { streamName: string }[];
}
export const useHeroDefendAnimation = ({
  scopeRef,
  setAnimation,
  mapRef,
  content,
}: UseHeroDefendAnimationProps) => {
  useGSAP(
    () => {
      gsap.set(".js-defend-item", {
        height: 0,
      });
      gsap.set(".js-defend-item svg, .js-scanner", {
        opacity: 0,
      });

      const tl = gsap.timeline();
      tl.to(".js-defend-items", {
        delay: 1,
        rowGap: "30px",
        duration: 2,
      })
        .to(
          ".js-defend-item",
          {
            duration: 1,
            height: 50,
            stagger: 0.3,
          },
          "<"
        )
        .to(
          ".js-corner",
          {
            duration: 0.1,
            "--size": "16px",
            stagger: 0.1,
          },
          "<"
        )
        .to(
          ".js-defend-item-text",
          {
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            scrambleText: ((i: number) =>
              content[i]?.streamName ?? "") as unknown as string,
          },
          "<"
        )
        .to(
          ".js-defend-item svg",
          {
            opacity: 1,
            stagger: 0.3,
          },
          "<"
        )
        .to(".js-tag", {
          scrambleText: "taking down illegal activities",
        })
        .to(".js-scanner", {
          opacity: 1,
        })
        .to(".js-scanner", {
          ease: "linear",
          duration: 1.5,
          x: 299,
          stagger: 0.1,
          repeat: 3,
          yoyo: true,
          onComplete: () => {
            gsap.to(".js-scanner", { opacity: 0 });
          },
        })
        .to(".js-defend-item-text", {
          scrambleText: "Illegal activity taken down",
          stagger: 0.15,
        })
        .to(".js-tag", {
          scrambleText: "All detected acitivites taken down",
          backgroundColor: "var(--green)",
        })
        .to(".js-defend-item svg", {
          opacity: 0,
        })
        .to(".js-tag", {
          scrambleText: "_",
          onComplete: () => {
            setAnimation(true);
            gsap.set(".js-tag", {
              opacity: 0,
            });
          },
        })
        .to(
          ".js-defend-item-text",
          {
            scrambleText: "",
            stagger: 0.05,
          },
          "<"
        )
        .to(
          ".js-corner",
          {
            "--size": "0px",
          },
          "<"
        )
        .to(mapRef.current, {
          duration: 2,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          ease: "power3.out",
        });
    },
    { scope: scopeRef }
  );
};

import React, { useRef } from "react";
import styles from "./style.module.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DefendItem from "./DefendItem";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGlobalContext } from "../../../context/GlobalContext";
gsap.registerPlugin(ScrambleTextPlugin);
interface HomeHeroDefendProps {}

const HomeHeroDefend: React.FC<HomeHeroDefendProps> = ({}) => {
  const { squareGridRef, setHeroAniDone } = useGlobalContext();
  const container = useRef(null);
  useGSAP(
    () => {
      const illegalStreams = [
        {
          streamName: "Illegal stream #a45x-92-48g ",
        },
        {
          streamName: "Illegal stream #b83k-31-24o ",
        },
        {
          streamName: "Illegal stream #g90a-11-85f ",
        },
        {
          streamName: "Illegal stream #n54n-29-13b ",
        },
        {
          streamName: "Illegal stream #r21l-67-04a ",
        },
        {
          streamName: "+24 illegal streams detected",
        },
      ];
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
            scrambleText: ((i: number) => illegalStreams[i].streamName) as any,
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
          scrambleText: "taking down illegal streams",
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
          scrambleText: "Illegal stream taken down",
          stagger: 0.15,
        })
        .to(".js-tag", {
          scrambleText: "All detected streams taken down",
          backgroundColor: "var(--green)",
        })
        .to(".js-defend-item svg", {
          opacity: 0,
        })
        .to(".js-tag", {
          scrambleText: "f",
          onComplete: () => {
            setHeroAniDone(true);
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
        .to(squareGridRef.current, {
          duration: 2,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          ease: "power3.out",
        });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`${styles.wrapper}`}>
      <div className={`${styles.tag} js-tag`}>Illegal streams detected</div>
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

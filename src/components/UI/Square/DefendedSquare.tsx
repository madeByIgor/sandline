import { useGSAP } from "@gsap/react";
import img from "../../../assets/images/svg/logo-shield-svg.svg";
import Corner from "../Corner/Corner";
import styles from "./style.module.css";
import { useRef } from "react";
import gsap from "gsap";
interface DefendedSquareProps {}

const DefendedSquare: React.FC<DefendedSquareProps> = ({}) => {
  const containerRef = useRef(null);
  useGSAP(
    (_, contextSafe) => {
      // gsap.set();
      // const onClickGood = contextSafe(() => {
      //   gsap.to(goodRef.current, { rotation: 180 });
      // });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className={`${styles.defendedSquare} js-defended-square`}
    >
      {/* <div className={styles.defendedInfoWrap}>
        <Corner size={0} />
        <Corner size={0} position="top-right" />
        <Corner size={0} position="bottom-left" />
        <Corner size={0} position="bottom-right" />{" "}
        <div className={styles.defendedInfoTitle}>
          <p>Protected by Sandline</p>
        </div>
        <div className={styles.defendedInfoRow}>
          <p>Node id:</p>
          <p>#a45x-92</p>
        </div>
        <div className={styles.defendedInfoRow}>
          <p>activity:</p>
          <p>4,392 unauthorized views</p>
        </div>
        <div className={styles.defendedInfoRow}>
          <p>integrity:</p>
          <p>compromised cdn node</p>
        </div>{" "}
      </div> */}
      <img src={img} />
    </div>
  );
};

export default DefendedSquare;

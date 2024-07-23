import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/Property1Default1.module.css";

export type Property1Default1Type = {
  className?: string;
  frame1321315107?: string;
  frame1321315111?: string;
  frame1321315113?: string;
  frame1321315110?: string;
  frame1321315109?: string;
  group1321314281?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  className = "",
  frame1321315107,
  frame1321315111,
  frame1321315113,
  frame1321315110,
  frame1321315109,
  group1321314281,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1Default1Style}
    >
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src={frame1321315107} />
        </div>
        <img className={styles.frameItem} alt="" src={frame1321315111} />
        <img className={styles.frameInner} alt="" src={frame1321315113} />
        <img className={styles.frameIcon} alt="" src={frame1321315110} />
      </div>
      <div className={styles.meetOurStarclinch}>Meet Our Starclinch Squads</div>
      <img
        className={styles.property1defaultChild}
        alt=""
        src={frame1321315109}
      />
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <div className={styles.div}>{`->`}</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>{`<-`}</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.membersWrapper}>
            <div className={styles.div}>5 Members</div>
          </div>
          <div className={styles.designDynamosParent}>
            <div className={styles.designDynamos}>Design Dynamos</div>
            <div className={styles.theArtistsBehind}>
              The artists behind the visuals. These design superheroes bring
              ideas to life, painting our projects with creativity and
              imagination
            </div>
          </div>
        </div>
        <div className={styles.ourDesignTeamIsGrowingApParent}>
          <div className={styles.div}>
            Our design team is growing. Apply Now
          </div>
          <img className={styles.groupIcon} alt="" src={group1321314281} />
        </div>
      </div>
    </div>
  );
};

export default Property1Default1;

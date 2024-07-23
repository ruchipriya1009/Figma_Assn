import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1Frame2 from "./Property1Frame2";
import styles from "../styles/Property1Default2.module.css";

export type Property1Default2Type = {
  className?: string;
  image59?: string;
  image60?: string;
  image61?: string;
  group4?: string;
  frame1321314406?: string;
  frame1321314407?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default2: FunctionComponent<Property1Default2Type> = ({
  className = "",
  image59,
  image60,
  image61,
  group4,
  frame1321314406,
  frame1321314407,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1Default2Style}
    >
      <div className={styles.recentShowsMadeStarStuddedParent}>
        <div className={styles.recentShowsMade}>
          Recent shows made star-studded via StarClinch
        </div>
        <Property1Frame2
          image59="/image-591@2x.png"
          image60="/image-601@2x.png"
          image61="/image-611@2x.png"
          group4="/group-41@2x.png"
          property1Frame1321314396AlignSelf="stretch"
        />
      </div>
      <img
        className={styles.property1defaultChild}
        alt=""
        src={frame1321314406}
      />
      <img
        className={styles.property1defaultItem}
        alt=""
        src={frame1321314407}
      />
    </div>
  );
};

export default Property1Default2;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/Property1Default.module.css";

export type Property1DefaultType = {
  className?: string;
  frame1321314913?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  className = "",
  frame1321314913,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1DefaultStyle}
    >
      <div className={styles.lateNightMaggie}>
        Late Night Maggie Party for the boost
      </div>
      <img
        className={styles.property1defaultChild}
        alt=""
        src={frame1321314913}
      />
    </div>
  );
};

export default Property1Default;

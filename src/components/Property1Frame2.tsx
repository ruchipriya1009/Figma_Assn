import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../styles/Property1Frame2.module.css";

export type Property1Frame2Type = {
  className?: string;
  image59?: string;
  image60?: string;
  image61?: string;
  group4?: string;

  /** Style props */
  property1Frame1321314396AlignSelf?: CSSProperties["alignSelf"];
};

const Property1Frame2: FunctionComponent<Property1Frame2Type> = ({
  className = "",
  image59,
  image60,
  image61,
  group4,
  property1Frame1321314396AlignSelf,
}) => {
  const property1Frame1321314396Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: property1Frame1321314396AlignSelf,
    };
  }, [property1Frame1321314396AlignSelf]);

  return (
    <div
      className={[styles.property1frame1321314396, className].join(" ")}
      style={property1Frame1321314396Style}
    >
      <div className={styles.property1frame1321314396Inner}>
        <div className={styles.image59Parent}>
          <img className={styles.image59Icon} alt="" src={image59} />
          <img className={styles.image59Icon} alt="" src={image60} />
          <img className={styles.image59Icon} alt="" src={image61} />
        </div>
      </div>
      <div className={styles.noraFatehiForAnEventHosteParent}>
        <div className={styles.noraFatehiForContainer}>
          <span>{`Nora Fatehi `}</span>
          <span className={styles.forAnEvent}>
            for an event hosted by XYZ performed
          </span>
          <span> at Pune .</span>
        </div>
        <div className={styles.fluentcalendar16FilledParent}>
          <img
            className={styles.fluentcalendar16FilledIcon}
            alt=""
            src="/fluentcalendar16filled.svg"
          />
          <div className={styles.march2023}>14 March 2023</div>
        </div>
      </div>
      <img
        className={styles.property1frame1321314396Child}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.property1frame1321314396Item}
        alt=""
        src={group4}
      />
    </div>
  );
};

export default Property1Frame2;

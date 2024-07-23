import { FunctionComponent } from "react";
import styles from "../styles/FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.instanceChild} />
      <div className={styles.frameGroup}>
        <div className={styles.frameChild} />
        <div className={styles.frameContainer}>
          <div className={styles.talentedFolksParent}>
            <div className={styles.talentedFolks}>20+Talented Folks</div>
            <div className={styles.weAreThe}>We are the team of</div>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-1321314929@2x.png"
            />
            <img
              className={styles.frameInner}
              alt=""
              src="/frame-1321314930@2x.png"
            />
            <img className={styles.vectorIcon} alt="" src="/vector-226.svg" />
          </div>
          <div className={styles.fromDedicationToFunToCreParent}>
            <div className={styles.fromDedicationTo}>
              From passion-driven dedication to impactful contribution, we do it
              all here. We are growing and will be excited to hear from you !
            </div>
            <div className={styles.joinOurTeamWrapper}>
              <div className={styles.joinOurTeam}>{`Join our team  ->`}</div>
            </div>
          </div>
        </div>
        <img
          className={styles.frameIcon}
          alt=""
          src="/frame-1321314931@2x.png"
        />
        <img
          className={styles.frameChild1}
          alt=""
          src="/frame-1321314932@2x.png"
        />
        <img
          className={styles.frameChild2}
          alt=""
          src="/frame-1321314998@2x.png"
        />
        <img
          className={styles.frameChild3}
          alt=""
          src="/frame-1321314934@2x.png"
        />
        <img
          className={styles.frameChild4}
          alt=""
          src="/frame-1321314935@2x.png"
        />
        <img
          className={styles.frameChild5}
          alt=""
          src="/frame-1321314997@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;

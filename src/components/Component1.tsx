import { FunctionComponent } from "react";
import styles from "../styles/Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.component45, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.photosWrapper}>
            <div className={styles.photos}>Photos</div>
          </div>
          <div className={styles.videosWrapper}>
            <div className={styles.photos}>Videos</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-1321314655@2x.png"
              />
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-1321314656@2x.png"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-1321314657@2x.png"
              />
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-1321314658@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-13213146571@2x.png"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-13213146581@2x.png"
              />
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-1321314660@2x.png"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-1321314659@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild5} />
          <div className={styles.frameChild5} />
          <div className={styles.frameChild5} />
        </div>
      </div>
    </div>
  );
};

export default Component1;

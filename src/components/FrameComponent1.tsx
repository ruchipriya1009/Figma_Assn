import { FunctionComponent } from "react";
import Property1Default from "./Property1Default";
import styles from "../styles/FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/vector-248.svg" />
      <Property1Default
        frame1321314913="/frame-1321314913@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="763.7px"
        property1DefaultLeft="676.7px"
      />
      <Property1Default
        frame1321314913="/frame-13213149131@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="183px"
        property1DefaultLeft="275.1px"
      />
      <Property1Default
        frame1321314913="/frame-13213149132@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="1344.4px"
        property1DefaultLeft="275.1px"
      />
      <Property1Default
        frame1321314913="/frame-13213149133@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="1925.1px"
        property1DefaultLeft="676.7px"
      />
    </div>
  );
};

export default FrameComponent1;

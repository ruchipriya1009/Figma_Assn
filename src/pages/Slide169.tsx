import { FunctionComponent } from "react";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import FrameComponent1 from "../components/FrameComponent1";
import Property1Default1 from "../components/Property1Default1";
import Property1Default2 from "../components/Property1Default2";
import FrameComponent from "../components/FrameComponent";
import styles from "./Slide169.module.css";

const Slide169: FunctionComponent = () => {
  return (
    <div className={styles.slide1691}>
      <Component2 />
      <Component1 />
      <FrameComponent1 />
      <Property1Default1
        frame1321315107="/frame-1321315107@2x.png"
        frame1321315111="/frame-1321315111@2x.png"
        frame1321315113="/frame-1321315113@2x.png"
        frame1321315110="/frame-1321315110@2x.png"
        frame1321315109="/frame-1321315109@2x.png"
        group1321314281="/group-1321314281@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="4593px"
        property1DefaultLeft="0px"
      />
      <Property1Default2
        image59="/image-59@2x.png"
        image60="/image-60@2x.png"
        image61="/image-61@2x.png"
        group4="/group-4@2x.png"
        frame1321314406="/frame-1321314406@2x.png"
        frame1321314407="/frame-1321314407@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="5806px"
        property1DefaultLeft="0px"
      />
      <div className={styles.slide1691Child} />
      <FrameComponent />
    </div>
  );
};

export default Slide169;

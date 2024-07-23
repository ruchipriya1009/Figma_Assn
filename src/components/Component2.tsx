import { FunctionComponent } from "react";
import styles from "../styles/Component2.module.css";

export type Component2Type = {
  className?: string;
};

const Component2: FunctionComponent<Component2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.component1, className].join(" ")}>
      <div className={styles.component1Child} />
      <div className={styles.arijitSingh1Parent}>
        <img
          className={styles.arijitSingh1}
          alt=""
          src="/arijit-singh-1@2x.png"
        />
        <div className={styles.frameChild} />
      </div>
      <div className={styles.clickHereTo}>Click here to view more</div>
      <div className={styles.chooseFrom100CategoriesParent}>
        <div className={styles.chooseFrom100Container}>
          <span>Choose from</span>
          <span className={styles.categories}> 100+ Categories</span>
        </div>
        <div className={styles.exploreAllCategoriesParent}>
          <div className={styles.exploreAllCategories}>
            Explore all categories
          </div>
          <img className={styles.frameItem} alt="" src="/vector-209.svg" />
        </div>
      </div>
      <div className={styles.dancers}>Dancers</div>
      <div className={styles.singers}>Singers</div>
      <img className={styles.component1Item} alt="" src="/vector-210.svg" />
    </div>
  );
};

export default Component2;

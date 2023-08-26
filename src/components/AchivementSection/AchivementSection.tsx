import React from "react";
import styles from "./AchivementSection.module.css";
import SuccessCard from "../SuccessCard/SuccessCard";

const AchivementSection = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Why Choose us?</p>
      <SuccessCard />
    </div>
  );
};

export default AchivementSection;

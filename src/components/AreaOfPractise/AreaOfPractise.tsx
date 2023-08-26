import React from "react";
import styles from "./AreaOfPractise.module.css";
import BUSINESS_LAW from "../../assets/practicesSVG/BUSINESS_LAW.png";
import PARTNERSHIP_LAW from "../../assets/practicesSVG/PARTNERSHIP_LAW.png";
import REAL_ESTATE_LAW from "../../assets/practicesSVG/REAL_ESTATE_LAW.png";
import BUSINESS_LAW_1 from "../../assets/practicesSVG/BUSINESS_LAW_1.png";
import LANDLORD_DISPUTES from "../../assets/practicesSVG/LANDLORD_DISPUTES.png";
import ELDER_ABUSE from "../../assets/practicesSVG/ELDER_ABUSE.png";

const AreaOfPractise = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Area of Practices</p>
      <div className={styles.SecondWrapper}>
        <div className={styles.imageRowWrapper}>
          <img src={BUSINESS_LAW} alt="BUSINESS_LAW" />
          <img src={PARTNERSHIP_LAW} alt="PARTNERSHIP_LAW" />
        </div>
        <div className={styles.imageRowWrapper}>
          <img src={REAL_ESTATE_LAW} alt="REAL_ESTATE_LAW" />
          <img src={BUSINESS_LAW_1} alt="BUSINESS_LAW_1" />
        </div>
        <div className={styles.imageRowWrapper}>
          <img src={LANDLORD_DISPUTES} alt="LANDLORD_DISPUTES" />
          <img src={ELDER_ABUSE} alt="ELDER_ABUSE" />
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractise;

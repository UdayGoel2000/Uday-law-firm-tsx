import React from "react";
import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Let’s Introduce Ourself</p>
      <div className={styles.vertical}></div>
      <div style={{ width: "45%" }}>
        <p className={styles.contentHeading}>Criminal Lawyer</p>
        <p className={styles.content}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;

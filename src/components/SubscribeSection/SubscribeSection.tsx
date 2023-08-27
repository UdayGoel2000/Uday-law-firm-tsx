import React from "react";
import styles from "./SubscribeSection.module.css";

const SubscribeSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <p className={styles.mainHeading}>Subscribe Our Newsletter</p>
        <div className={styles.seconfWrapper}>
          <input type="text" placeholder="Name:" />
          <input type="text" placeholder="Enter Your Emial" />
          <button className={styles.sendButton}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;

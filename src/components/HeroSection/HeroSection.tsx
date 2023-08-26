import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as HeroImage } from "../../assets/HeroImage.svg";
import { ReactComponent as Message } from "../../assets/Message.svg";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secondWrapper}>
        <p className={styles.mainHeading}>
          You don’t have to Fight them Alone.
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <label htmlFor="email" className={styles.inputMainDiv}>
          <div className={styles.inputDiv}>
            <Message className={styles.messageIcon} />
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <button
            id="btnEmail"
            className={styles.emaillButton}
            onClick={(e) => console.log(e.target)}
          >
            Let’s Talk
          </button>
        </label>
      </div>
      <div className={styles.heroImage}>
        <HeroImage style={{ width: "90%", height: "90%" }} />
      </div>
    </div>
  );
};

export default HeroSection;

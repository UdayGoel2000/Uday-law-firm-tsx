import React from "react";
import styles from "./Logo.module.css";
import { ReactComponent as LogoImage } from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <LogoImage />
      <p>IGSTUDIO</p>
    </div>
  );
};

export default Logo;

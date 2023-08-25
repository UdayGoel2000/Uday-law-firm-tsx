import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.secondWrapper}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practise Areas</p>
        <p>About us</p>
      </div>
      <button className={styles.navBarButton}>Contact Now</button>
    </div>
  );
};

export default NavBar;

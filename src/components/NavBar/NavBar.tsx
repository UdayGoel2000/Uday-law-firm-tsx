import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.wrapperMobile} onClick={() => toggleMenu()}>
          <div className={styles.menuMobile}></div>
          <div className={styles.menuMobile}></div>
          <div className={styles.menuMobile}></div>
        </button>
        <Logo />
        <div className={styles.secondWrapper}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practise Areas</p>
          <p>About us</p>
        </div>
        <button className={styles.navBarButton}>Contact Now</button>
      </div>
      <div className={styles.dropDown}>
        <ul>
          <li
            className={styles.dropDownList}
            style={{ display: menuClicked ? "block" : "none" }}
          >
            <center>Home</center>
          </li>
          <li
            className={styles.dropDownList}
            style={{ display: menuClicked ? "block" : "none" }}
          >
            <center>Attorneys</center>
          </li>
          <li
            className={styles.dropDownList}
            style={{ display: menuClicked ? "block" : "none" }}
          >
            <center>Practise Areas</center>
          </li>
          <li
            className={styles.dropDownList}
            style={{ display: menuClicked ? "block" : "none" }}
          >
            <center>About us</center>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

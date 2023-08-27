import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { ReactComponent as SocialIcon } from "../../assets/SocialIcon.svg";

interface Props {
  Footer: boolean;
}

const NavBar = ({ Footer }: Props) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <>
      <div className={Footer ? styles.footerWrapper : styles.wrapper}>
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
        {Footer ? (
          <SocialIcon />
        ) : (
          <button className={styles.navBarButton}>Contact Now</button>
        )}
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
      {Footer ? (
        <div className={styles.footerLine}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;

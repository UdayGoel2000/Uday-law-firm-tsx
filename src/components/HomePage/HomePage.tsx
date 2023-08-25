import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./HomePage.module.css";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [mode, setMode] = useState("darkMode");
  const toggleFunction = (check: boolean) => {
    check ? setMode("lightMode") : setMode("darkMode");
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <div className={styles.toggleDiv}>
        <input
          type="checkbox"
          id="toggle"
          onChange={(e) => toggleFunction(e.target.checked)}
        />
        <label htmlFor="toggle" className={styles.toggleButton}>
          <span className={styles.toggleBall}></span>
        </label>
      </div>
      <div style={{ height: 30 }}></div>
      <NavBar />
    </div>
  );
};

export default HomePage;

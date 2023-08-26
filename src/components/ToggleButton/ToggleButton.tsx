import React from "react";
import styles from "./ToggleButton.module.css";
import { useState, useEffect } from "react";

const ToggleButton = () => {
  const [mode, setMode] = useState("darkMode");
  const toggleFunction = (check: boolean) => {
    check ? setMode("lightMode") : setMode("darkMode");
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div style={{ height: 30 }}>
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
    </div>
  );
};

export default ToggleButton;

import React from "react";
import styles from "./TeamSection.module.css";
import TeamCard from "../TeamCard/TeamCard";

const TeamSection = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Our Team</p>
      <TeamCard />
    </div>
  );
};

export default TeamSection;

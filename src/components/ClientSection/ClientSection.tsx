import React from "react";
import styles from "./ClientSection.module.css";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import ClientCard from "../ClientCard/ClientCard";

const ClientSection = () => {
  return (
    <div style={{}}>
      <div className={styles.wrapper}>
        <p className={styles.mainHeading}>What says our happy Clients</p>
        <div>
          <LeftArrow className={styles.leftArrow} />
          <RightArrow className={styles.rightArrow} />
        </div>
      </div>
      <ClientCard />
    </div>
  );
};

export default ClientSection;

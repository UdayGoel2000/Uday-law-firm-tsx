import React from "react";
import styles from "./TeamCard.module.css";
import Cesforila from "../../assets/team/Cesforila.png";
import Colleen from "../../assets/team/Colleen.png";
import DanialDef from "../../assets/team/DanialDef.png";
import Haldone from "../../assets/team/Haldone.png";
import NikJeo from "../../assets/team/NikJeo.png";
import Sanfole from "../../assets/team/Sanfole.png";

const TeamCard = () => {
  const cardsData = [
    {
      icon: (
        <img
          src={DanialDef}
          alt="DanialDef"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 1,
      main_heading: "Danial Def",
      sub_heading: "301 Cases",
    },
    {
      icon: (
        <img
          src={Sanfole}
          alt="Sanfole"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 2,
      main_heading: "Sanfole",
      sub_heading: "850 Cases",
    },
    {
      icon: (
        <img
          src={Cesforila}
          alt="Cesforila"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 3,
      main_heading: "Cesforila",
      sub_heading: "470 Cases",
    },
    {
      icon: (
        <img
          src={Colleen}
          alt="Colleen"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 4,
      main_heading: "Colleen",
      sub_heading: "180 Cases",
    },
    {
      icon: (
        <img
          src={Haldone}
          alt="Haldone"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 5,
      main_heading: "Haldone",
      sub_heading: "212 Cases",
    },
    {
      icon: (
        <img
          src={NikJeo}
          alt="NikJeo"
          style={{ padding: "8% 8% 0 8%", width: "100%" }}
        />
      ),
      id: 6,
      main_heading: "Nik Jeo",
      sub_heading: "350 Cases",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {cardsData.map((cardData) => (
        <div className={styles.card} key={cardData.id}>
          <div className={styles.circleFOrDP}>{cardData.icon}</div>
          <div>
            <p className={styles.mainHeading}>{cardData.main_heading}</p>
            <p className={styles.sub_heading}>{cardData.sub_heading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;

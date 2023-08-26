import React from "react";
import styles from "./ClientCard.module.css";
import { ReactComponent as JaneCooper } from "../../assets/clients/JaneCooper.svg";
import { ReactComponent as DevonLane } from "../../assets/clients/DevonLane.svg";
import { ReactComponent as RobertFox } from "../../assets/clients/RobertFox.svg";

const ClientCard = () => {
  const cardDataObj = {
    sub_heading: "Ceo of Hunt",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer",
  };
  const cardsData = [
    {
      ...cardDataObj,
      icon: <JaneCooper />,
      id: 1,
      main_heading: "Jane Cooper",
    },
    { ...cardDataObj, icon: <DevonLane />, id: 2, main_heading: "Devon Lane" },
    { ...cardDataObj, icon: <RobertFox />, id: 3, main_heading: "Robert Fox" },
  ];
  return (
    <div className={styles.wrapper}>
      {cardsData.map((cardData) => (
        <div className={styles.card} key={cardData.id}>
          <div className={styles.circleFOrGift}>{cardData.icon}</div>
          <p className={styles.mainHeading}>{cardData.main_heading}</p>
          <p className={styles.sub_heading}>{cardData.sub_heading}</p>
          <p className={styles.content}>{cardData.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientCard;

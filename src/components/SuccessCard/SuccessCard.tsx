import React from "react";
import styles from "./SuccessCard.module.css";
import { ReactComponent as Gift } from "../../assets/Gift.svg";

const SuccessCard = () => {
  const cardDataObj = {
    icon: <Gift className={styles.giftIcon} />,
    main_heading: "98% Success Rate",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer",
    button_text: "Read More",
  };
  const cardsData = [
    { ...cardDataObj, id: 1 },
    { ...cardDataObj, id: 2, main_heading: "100% Success Rate" },
    { ...cardDataObj, id: 3, main_heading: "100% Success Rate" },
  ];
  return (
    <div className={styles.wrapper}>
      {cardsData.map((cardData) => (
        <div className={styles.card} key={cardData.id}>
          <div className={styles.circleFOrGift}>{cardData.icon}</div>
          <p className={styles.mainHeading}>{cardData.main_heading}</p>
          <p className={styles.content}>{cardData.content}</p>
          <button className={styles.readMore}>{cardData.button_text}</button>
        </div>
      ))}
    </div>
  );
};

export default SuccessCard;

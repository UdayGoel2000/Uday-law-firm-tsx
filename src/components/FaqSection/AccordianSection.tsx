import React, { useState } from "react";
import styles from "./AccordianSection.module.css";

interface valueData {
  title: string;
  content: string;
}
interface dataobj {
  key: string;
  value: valueData;
}
interface Props {
  //   data: [dataobj];
  data: Array<dataobj>;
}
const AccordianSection = ({ data }: Props) => {
  const [checkedFaq, setCheckedFaq] = useState("");
  return (
    <div className={styles.mainFaqDiv}>
      <div className={styles.accordian}>
        {data.map((item) => (
          <div key={item.key}>
            <hr className={styles.hr} />
            <div className={styles.accordianTab}>
              <input
                type="radio"
                id={item.key}
                className={styles.accordianToggle}
                name="toggle"
                checked={item.key === checkedFaq ? true : false}
                onChange={(e) => setCheckedFaq(e.target.id)}
              />
              <label className={styles.accordianTitleTab} htmlFor={item.key}>
                <p className={styles.accordianTitle}>{item.value.title}</p>
                <span className={styles.accordianArrowIcon}>+</span>
              </label>
              <div className={styles.accordianContent}>
                <p>{item.value.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordianSection;

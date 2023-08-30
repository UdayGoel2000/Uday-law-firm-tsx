import styles from "./ClientSection.module.css";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
// import ClientCard from "../ClientCard/ClientCard";
import JaneCooper from "../../assets/clients/JaneCooper.png";
import DevonLane from "../../assets/clients/DevonLane.png";
import RobertFox from "../../assets/clients/RobertFox.png";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

interface clientCardData {
  id: number;
  main_heading: string;
  // icon: string;
  icon: JSX.Element;
  // cardDataObj: cardDataObjInt;
  sub_heading: string;
  content: string;
}

interface cardsDataArray {
  // data: cardData[];
  data: Array<clientCardData>;
}

const ClientSection = () => {
  const swiper = useSwiper();
  const sliderRef = useRef<any | null>(null);
  const handleNext = (next: boolean) => {
    if (!next) sliderRef.current.swiper.slidePrev();
    else sliderRef.current.swiper.slideNext();
    // console.log(next);
  };

  const Controls = ({ data }: cardsDataArray) => {
    const swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(0, 5000);
    }, [data]);

    return <></>;
  };

  const cardDataObj = {
    sub_heading: "Ceo of Hunt",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer",
  };
  const cardsData = [
    {
      ...cardDataObj,
      icon: (
        <img
          src={JaneCooper}
          alt="JaneCooper"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: JaneCooper,
      id: 1,
      main_heading: "Jane Cooper",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={DevonLane}
          alt="DevonLane"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: DevonLane,
      id: 2,
      main_heading: "Devon Lane",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={RobertFox}
          alt="RobertFox"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: RobertFox,
      id: 3,
      main_heading: "Robert Fox",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={JaneCooper}
          alt="JaneCooper"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: JaneCooper,
      id: 4,
      main_heading: "Jane Cooper",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={DevonLane}
          alt="DevonLane"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: DevonLane,
      id: 5,
      main_heading: "Devon Lane",
    },
    {
      ...cardDataObj,
      icon: (
        <img
          src={RobertFox}
          alt="RobertFox"
          style={{ padding: "8% 0 3% 8%", width: "90%" }}
        />
      ),
      // icon: RobertFox,
      id: 6,
      main_heading: "Robert Fox",
    },
  ];
  return (
    <div style={{}}>
      <div className={styles.wrapper}>
        <p className={styles.mainHeading}>What says our happy Clients</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <LeftArrow
            className={styles.leftArrow}
            onClick={() => handleNext(false)}
          />
          <RightArrow
            className={styles.rightArrow}
            onClick={() => handleNext(true)}
          />
        </div>
      </div>
      <div className={styles.wrapper1}>
        <Swiper
          {...swiper}
          initialSlide={0}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={145}
          allowTouchMove={true}
          ref={sliderRef}
        >
          <Controls data={cardsData} />
          {cardsData.map((cardData: clientCardData) => (
            <SwiperSlide key={cardData.id}>
              <div className={styles.card} key={cardData.id}>
                <div className={styles.circleFOrDP}>{cardData.icon}</div>
                <p className={styles.cardMainHeading}>
                  {cardData.main_heading}
                </p>
                <p className={styles.sub_heading}>{cardData.sub_heading}</p>
                <p className={styles.content}>{cardData.content}</p>
              </div>
              {/* <ClientCard data={cardData} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSection;

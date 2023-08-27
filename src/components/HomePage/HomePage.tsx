import React from "react";
import NavBar from "../NavBar/NavBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import HeroSection from "../HeroSection/HeroSection";
import IntroSection from "../IntroSection/IntroSection";
import AchivementSection from "../AchivementSection/AchivementSection";
import AreaOfPractise from "../AreaOfPractise/AreaOfPractise";
import ClientSection from "../ClientSection/ClientSection";
import TeamSection from "../TeamSectoin/TeamSection";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import FaqSection from "../FaqSection/FaqSection";

const HomePage = () => {
  return (
    <div>
      <ToggleButton />
      <NavBar Footer={false} />
      <HeroSection />
      <IntroSection />
      <AchivementSection />
      <AreaOfPractise />
      <ClientSection />
      <TeamSection />
      <FaqSection />
      <SubscribeSection />
      <NavBar Footer={true} />
    </div>
  );
};

export default HomePage;

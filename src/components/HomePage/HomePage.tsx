import React from "react";
import NavBar from "../NavBar/NavBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import HeroSection from "../HeroSection/HeroSection";
import IntroSection from "../IntroSection/IntroSection";
import AchivementSection from "../AchivementSection/AchivementSection";
import AreaOfPractise from "../AreaOfPractise/AreaOfPractise";
import ClientSection from "../ClientSection/ClientSection";

const HomePage = () => {
  return (
    <div>
      <ToggleButton />
      <NavBar />
      <HeroSection />
      <IntroSection />
      <AchivementSection />
      <AreaOfPractise />
      <ClientSection />
    </div>
  );
};

export default HomePage;

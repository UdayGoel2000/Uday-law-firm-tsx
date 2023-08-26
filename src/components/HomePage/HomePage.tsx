import React from "react";
import NavBar from "../NavBar/NavBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import HeroSection from "../HeroSection/HeroSection";
import IntroSection from "../IntroSection/IntroSection";
import AchivementSection from "../AchivementSection/AchivementSection";

const HomePage = () => {
  return (
    <div>
      <ToggleButton />
      <NavBar />
      <HeroSection />
      <IntroSection />
      <AchivementSection />
    </div>
  );
};

export default HomePage;

import React from "react";
import NavBar from "../NavBar/NavBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import HeroSection from "../HeroSection/HeroSection";
import IntroSection from "../IntroSection/IntroSection";
import AchivementSection from "../AchivementSection/AchivementSection";
import AreaOfPractise from "../AreaOfPractise/AreaOfPractise";
import ClientSection from "../ClientSection/ClientSection";
import TeamSection from "../TeamSectoin/TeamSection";

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
      <TeamSection />
    </div>
  );
};

export default HomePage;

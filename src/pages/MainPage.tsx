import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import PreviewSection from "../components/PreviewSection";
import AboutSection from "../components/AboutSection";
import ContactsSection from "../components/ContactsSection";

import React from "react";
import GetPhoneSection from "../components/GetPhoneSection";

const MainPage: React.FC = () => {

  return (
    <main className="main app-content">
      <HeroSection />
      {/* <CategoriesSection/>
      <PreviewSection />
      <AboutSection/>
      <GetPhoneSection/>
      <ContactsSection /> */}
    </main>
  );
};

export default MainPage;

import React from "react";
import Navbar from "./Navbar";
import { HeroSection } from "../components/Models/Hero";
import Forms from "../components/Models/Forms";
import Skills from "../components/Models/Skills";
import About from "../components/About";
import ProjectSection from "../components/Models/ProjectSection";

const MainPage = () => {
  return (
    <div className="backgroundColor" dir="rtl">
      <Navbar />
      <br />
      <div className="flex flex-wrap gap-5">
        {/* model */}
        <div className="w-[70%]">
          <HeroSection />
        </div>
        {/* model */}

        {/* Form */}
        <div className="w-[20%]">
          <Forms />
        </div>
        {/* Form */}
      </div>
      <hr />
      <Skills />
      <br />
      <hr />
      <About />
      <br />
      <hr />
      <ProjectSection />
    </div>
  );
};

export default MainPage;

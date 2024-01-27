import React from "react";
import Navbar from "./Navbar";
import { HeroSection } from "../components/Models/Hero";
import Forms from "../components/Models/Forms";

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
    </div>
  );
};

export default MainPage;

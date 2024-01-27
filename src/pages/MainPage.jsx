import React from "react";
import Navbar from "./Navbar";
import { HeroSection } from "../components/Models/Hero";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <HeroSection />
    </div>
  );
};

export default MainPage;

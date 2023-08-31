import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Documents from "../components/Documents";
import Procedure from "../components/Procedure";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <Features />
      <Documents />
      <Procedure />
      <Footer />
    </>
  );
};

export default Home;

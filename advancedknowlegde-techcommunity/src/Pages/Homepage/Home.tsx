import React from "react";
import { AppBar } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Herosection/Hero";
import Seofriendly from "../../Components/Seofriendly-section/Seofriendly";
import Portfolio from "../../Components/Portfolio-section/Portfolio";
import Parallax from "../../Components/Parrallax-section/Parallax";
import Limit from "../../Components/Limit-section/Limit";
import Latest from "../../Components/Latest-section/Latest";
import Customer from "../../Components/Customer-section/Customer";
import Client from "../../Components/Client-section/Client";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Seofriendly />
      <Portfolio />
      <Parallax />
      <Limit />
      <Latest />
      <Customer />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;

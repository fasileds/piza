import React from "react";
import NavBar from "../../component/navBar/NavBar";
import Header from "../../component/header/Header";
import Slider from "../../component/slider/Slider";
import Midel from "../../component/middle/Midel";
import PizaCard from "../../component/pozaCard/PizaCard";
import "./home.css";
import Footer from "../../component/footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Slider />
      <Midel />
      <div className="cardComponents">
        <PizaCard />
        <PizaCard />

        <PizaCard />
        <PizaCard />
        <PizaCard />
        <PizaCard />
        <PizaCard />
        <PizaCard />
      </div>
      <Footer />
    </div>
  );
}

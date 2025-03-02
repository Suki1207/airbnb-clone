import React from "react";
import ReactDOM from "react-dom";

import HeroCSS from "./Hero.css";

import CollageImg from "./collage.png";

function Hero() {
  return (
    <section className="hero-section">
      <img src={CollageImg} alt="Collage of AirBnB experiences" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  const cardItems = Data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}

        // item={item}

        // img={item.img}
        // star={item.star}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.country}
        // price={item.price}
        // title={item.titles}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardItems}
    </div>
  );
}

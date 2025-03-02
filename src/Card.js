import React from "react";
import ReactDOM from "react-dom";

import CardCSS from "./Card.css";

function Card({
  img,
  star,
  rating,
  reviewCount,
  country,
  price,
  titles,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-batch">{badgeText}</div>}
      <img
        className="experience-img"
        src={`./assets/${img}`}
        alt="AirBnB Experience"
      />

      <div className="card-stats">
        <img className="star-img" src={`./assets/${star}`} alt="Star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount})</span>
        <span className="gray">{country}</span>
      </div>
      <p>{titles}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;

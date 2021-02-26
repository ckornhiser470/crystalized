import React from "react";

import "./crystal-card.css";

const images = require.context("../../public/crystal_images", true);
// import defaultImg from "../rose_quartz.png";

export const CrystalCard = (props) => {
  console.log(props);
  const image = images(`.${props.crystal.photo}`);
  console.log(image);
  const purpose = props.crystal.purpose.sort().join(", ");
  return (
    <div className="card-container">
      <img src={image} alt="product" />
      <p key={props.crystal.id}>{props.crystal.name}</p>
      <em>{purpose}</em>
    </div>
  );
};

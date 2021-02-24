import React from "react";

import "./crystal-card.css";

import defaultImg from "./rose_quartz.png";

export const CrystalCard = (props) => {
  console.log(props);
  return (
    <div className="card-container">
      <img alt="crystal" src={defaultImg} width="100" />
      <p key={props.crystal.id}>{props.crystal.name}</p>
      <em>{props.crystal.purpose}</em>
    </div>
  );
};

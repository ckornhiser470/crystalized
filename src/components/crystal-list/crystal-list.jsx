import React from "react";
import { CrystalCard } from "../crystal-card/crystal-card.jsx";
import "./crystal-list.css";

export const CrystalList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.crystals.map((crystal) => (
        <CrystalCard key={crystal.id} crystal={crystal} />
      ))}
    </div>
  );
};

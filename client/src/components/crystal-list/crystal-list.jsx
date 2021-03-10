import React from "react";
import { CrystalCard } from "../crystal-card/crystal-card.jsx";
import "./crystal-list.scss";

export const CrystalList = (props) => {
  const { crystals } = props;

  return (
    <div className="card-list">
      {crystals.map(({ id, ...otherSectionProps }) => (
        <CrystalCard key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

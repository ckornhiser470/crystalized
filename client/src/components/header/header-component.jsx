import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header-styles.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <div
          className="image"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      </Link>
    </div>
  );
};

export default Header;

import "./App.css";

import React, { Component } from "react";
import { CrystalList } from "./components/crystal-list/crystal-list.jsx";
class App extends Component {
  state = {
    crystals: [
      {
        id: 1,
        name: "Rose Quartz",
        purpose: "self-love",
      },
      {
        id: 2,
        name: "Selenite",
        purpose: "cleansing",
      },
      {
        id: 3,
        name: "Amber",
        purpose: "healing",
      },
      {
        id: 4,
        name: "Black Onyx",
        purpose: "protection",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search for crystals"></input>
        <h1>crystalized</h1>
        <CrystalList crystals={this.state.crystals} />
      </div>
    );
  }
}

export default App;

import "./App.css";

import React, { Component } from "react";
import { CrystalList } from "./components/crystal-list/crystal-list.jsx";
import CrystalDataServices from "./services/service";

class App extends Component {
  constructor() {
    super();
    this.state = {
      crystals: [],
    };
  }
  componentDidMount() {
    CrystalDataServices.getAll().then((response) =>
      this.setState({ crystals: response.data.crystals })
    );
  }

  render() {
    console.log(this.state.crystals);
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

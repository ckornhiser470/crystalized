import React, { Component } from "react";

import { CrystalList } from "../../crystal-list/crystal-list";
import CrystalDataServices from "../../../services/service";
import { SearchBox } from "../../search-box/search-box-component";

import "./homepage-styles.scss";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      crystals: [],
      searchField: "",
    };
  }
  componentDidMount() {
    CrystalDataServices.getAll().then((response) =>
      this.setState({ crystals: response.data.crystals })
    );
  }
  handleChange = (e) => {
    //automatically binds this to the function
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { crystals, searchField } = this.state;
    const filteredCrystals = crystals.filter(
      (crystal) =>
        crystal.name.toLowerCase().includes(searchField.toLowerCase()) ||
        crystal.color.toLowerCase().includes(searchField.toLowerCase()) ||
        crystal.purpose
          .toString()
          .toLowerCase()
          .includes(searchField.toLowerCase())
    );
    return (
      <div className="homepage">
        <h1>find crystals by name, color, or purpose</h1>
        <SearchBox
          placeholder="search for crystals"
          handleChange={this.handleChange}
        />
        <CrystalList crystals={filteredCrystals} />
      </div>
    );
  }
}
export default HomePage;

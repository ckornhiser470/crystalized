import React, { Component } from "react";

import "./crystal-card.scss";
// import "../../../public/crystal_images/amber.png";

// import defaultImg from "../rose_quartz.png";
export class CrystalCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { id, name, purpose, slug, healing } = this.props;
    const photoSrc = `/crystal_images/${slug}.png`;
    let purposes = purpose.sort().join(", ");
    return (
      <div
        className="card-container"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.state.hover ? (
          <p key={id} className="healing-p">
            {healing}
          </p>
        ) : (
          <React.Fragment>
            <img src={photoSrc} alt={slug} className="image" />
            <div className="card-footer">
              <p key={id} className="crystal-name">
                {name}
              </p>
              <p className="crystal-purposes">{purposes}</p>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

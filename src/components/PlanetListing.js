import React, { Component } from 'react';

class PlanetListing extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-12 planet-listings__planet">
            <a href="#">
                <div className="planet-listings__planet__img">
                    <img src={this.props.planet.img} alt={this.props.planet.name} />
                </div>
                <h3>{this.props.planet.name}</h3>
                <p>{this.props.planet.description}</p>
                <h4>{this.props.planet.price}</h4>
                <button type="button" className="btn btn-default btn-md">
                     View Details
                </button>
             </a>
      </div>
    );
  }
}

export default PlanetListing;

import React, { Component } from 'react';

class PlanetListing extends Component { 
  render() {
    return (
      <div className="col-md-4 col-xs-12">
            <div className="planet-listings__planet">
                <div className="planet-listings__planet__img">
                    <img src={this.props.planet.img} alt={this.props.planet.name} />
                </div>
                <h3>{this.props.planet.name}</h3>
                <p>{this.props.planet.description}</p>
                <div className="planet-listings__planet__currency">
                    <h4><i className="glyphicon glyphicon-bitcoin"></i>{this.props.planet.price} brapples</h4>
                </div>
                <a href="#">   
                    <button type="button" className="btn btn-default btn-md">
                        View Details
                    </button>
                </a>
             </div>
      </div>
    );
  }
}

export default PlanetListing;

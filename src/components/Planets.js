import React, { Component } from 'react';
import PlanetListing from './PlanetListing';

class Planets extends Component {
  render() {
    let planetListings;
    let planetProps = this.props.listingOfPlanets;

    if (planetProps){
        planetListings = planetProps.map(function(planet, index){
            console.log(planet);
            return(
                <PlanetListing key={index} planet={planet} />
            );
        })
    }

    return (
      <div className="planet-listings">
        {planetListings}
      </div>
    );
  }
}

export default Planets;

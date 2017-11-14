import React, { Component } from 'react';
import PlanetListing from './PlanetListing';

class Planets extends Component {
  render() {
    let planetListings;
    let planetProps = this.props.listingOfPlanets;

    if (planetProps){
        planetListings = planetProps.map(function(planet){
            console.log(planet);
            return(
                <PlanetListing planet={planet} />
            );
        })
    }

    return (

      <div className="Heading">
        <h1>Real Estate for Planets</h1>
      </div>
    );
  }
}

export default Planets;

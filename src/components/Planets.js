import React, { Component } from 'react';
import PlanetListing from './PlanetListing';
import SearchFilter from './SearchFilter';

class Planets extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let planetListings = this.props.listingOfPlanets;

    // Filter planets by name
/*     let planetsQueriedBySearch = this.props.listingOfPlanets.filter(function(planet){
      return planet.name.indexOf(this.props.searchQuery) !== -1;
    }); */
  

    return (
      <div className="planet-listings">
        <div className="row">
            {planetListings.map(function(planet, index){
              return <PlanetListing key={index} planet={planet} />;
            })}
        </div>
      </div>
    );
  }
}

export default Planets;

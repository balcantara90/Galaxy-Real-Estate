import React, { Component } from 'react';
import PlanetListing from './PlanetListing';

class Planets extends Component {
  constructor(){
    super();
    this.state = {
      searchQuery: ''
    };
  }
  updateSearch(e){
    this.setState({searchQuery:e.target.value});
  }
  render() {
    // let planetListings = this.props.listingOfPlanets;

    // Filter planets by name
     let planetsQueriedBySearch = this.props.listingOfPlanets.filter(
       (planet) =>{
      return planet.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
       }
    ); 

    return (
      <div className="planet-listings">
        <div className="row search-filter">
          <div className="col-lg-12">
            <h3>Find your planet now!</h3>
            <div className="p-b-2">
              <input onChange={this.updateSearch.bind(this)} type="text" className="form-control" value={this.state.searchQuery} placeholder="Search for planet..." />
            </div>
          </div>
        </div>
        <div className="row">
            {planetsQueriedBySearch.map(function(planet, index){
              return <PlanetListing key={index} planet={planet} />;
            })}
        </div>
      </div>
    );
  }
}

export default Planets;

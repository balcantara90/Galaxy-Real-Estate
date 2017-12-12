import React, { Component } from 'react';
import Heading from './components/Heading';
import Planets from './components/Planets';
import AboutSection from './components/AboutSection';
import Request from 'superagent';
import './styles/App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      planets: '',
      searchQuery: ''
    }
  }

  componentWillMount() {
    this.getPlanets();
  }

  getPlanets() {
    let url = "http://rickandmorty.wikia.com/api/v1/Articles/Top?expand=1&category=planets&limit=15";
    let newPlanetsArray = [];

    Request.get(url).then((response) => {
      let planets = response.body.items;
      planets.map((entry) => {
        newPlanetsArray.push({
          name : entry.title,
          img : entry.thumbnail,
          description: entry.abstract,
          price: "0.5"
        })
      })
      this.setState ({
       planets: newPlanetsArray
      });
    });

  }

  render() {
    if (this.state.planets){
      return (
        <div className="App">
          <Heading />
          <div className="container">
            <AboutSection />
            <Planets listingOfPlanets={this.state.planets} searchQuery={this.state.searchQuery}/>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default App;

import React, { Component } from 'react';
import Heading from './components/Heading';
import Planets from './components/Planets';
import './styles/App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      listingOfPlanets: [
        {
          name: 'Gazorpazorp',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/d/de/Gazorpazorp_planet.png/revision/latest/scale-to-width-down/350?cb=20170330230455',
          description: 'Gazorpazorp is a planet in the Andromeda Galaxy.',
          price: '5 schmeckles'
        },
        {
          name: 'Cronenberg World',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/7/7a/Screenshot_2015-10-05_at_1.12.51_PM.png/revision/latest/scale-to-width-down/310?cb=20151005171418',
          description: 'Cronenberg World is Earth in a dimension where people on Earth are naturally Cronenbergs.',
          price: '2 schmeckles'
        },
        {
          name: 'Planet Squanch',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/e/e3/No_Image.png/revision/latest/scale-to-width-down/310?cb=20160908213759',
          description: 'A planet where Squanchy comes from and it is 6,000 light years away from Earth.',
          price: '17 schmeckles'
        },
        {
          name: 'Flarbellon-7',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/5/56/Flarbellon7House.png/revision/latest/scale-to-width-down/310?cb=20170508211706',
          description: 'Flarbellon-7 is a completely deserted planet only inhabited by Penps, insects, and some weird shrubs.',
          price: '12 schmeckles'
        },
        {
          name: 'Dwarf Terrace-9',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest/scale-to-width-down/280?cb=20151005172134',
          description: 'Dwarf Terrace-9 is a dwarf Earth-like planet with a circumference of 330 yards 808 times smaller than Earth.',
          price: '0.5 schmeckles'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Heading />
          <Planets listingOfPlanets={this.state.listingOfPlanets} />
        </div>
      </div>
    );
  }
}

export default App;

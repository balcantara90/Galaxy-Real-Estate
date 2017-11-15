import React, { Component } from 'react';
import Heading from './components/Heading';
import Planets from './components/Planets';
import SearchFilter from './components/SearchFilter';
import './styles/App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      searchQuery: '',
      listingOfPlanets: [
        {
          name: 'Gazorpazorp',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/d/de/Gazorpazorp_planet.png/revision/latest/scale-to-width-down/350?cb=20170330230455',
          description: 'Gazorpazorp is a planet in the Andromeda Galaxy.',
          price: '5'
        },
        {
          name: 'Cronenberg World',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/7/7a/Screenshot_2015-10-05_at_1.12.51_PM.png/revision/latest/scale-to-width-down/310?cb=20151005171418',
          description: 'Cronenberg World is Earth in a dimension where people on Earth are naturally Cronenbergs.',
          price: '2'
        },
        {
          name: 'Planet Squanch',
          img: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11910015_992815280739156_2071347225_n.jpg',
          description: 'A planet where Squanchy comes from and it is 6,000 light years away from Earth.',
          price: '17'
        },
        {
          name: 'Flarbellon-7',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/5/56/Flarbellon7House.png/revision/latest/scale-to-width-down/310?cb=20170508211706',
          description: 'Flarbellon-7 is a completely deserted planet only inhabited by Penps, insects, and some weird shrubs.',
          price: '12'
        },
        {
          name: 'Dwarf Terrace-9',
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/c/c4/Screenshot_2015-10-05_at_1.19.14_PM.png/revision/latest/scale-to-width-down/280?cb=20151005172134',
          description: 'Dwarf Terrace-9 is a dwarf Earth-like planet with a circumference of 330 yards 808 times smaller than Earth.',
          price: '0.5'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Heading />
          <SearchFilter searchQuery={this.state.searchQuery}/>
          <Planets listingOfPlanets={this.state.listingOfPlanets}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Heading from './components/Heading';
import Planets from './components/Planets';
import './App.css';

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
          img: 'https://vignette.wikia.nocookie.net/rickandmorty/images/e/e3/No_Image.png/revision/latest/scale-to-width-down/310?cb=20160908213759',
          description: 'Cronenberg World is Earth in a dimension where people on Earth are naturally Cronenbergs.',
          price: '10 schmeckles'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <Planets listingOfPlanets={this.state.listingOfPlanets} />
{/*         <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;

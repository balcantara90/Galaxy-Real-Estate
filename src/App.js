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
          description: 'Gazorpazorp is a planet in the Andromeda Galaxy.',
          price: '5 schmeckles'
        },
        {
          name: 'Cronenberg World',
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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

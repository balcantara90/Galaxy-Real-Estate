import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <div className="row p-b-2">
        <div className="col-md-8">
          <h2>What we do</h2>
          <p>Rick the founder of RGE is a genius scientist, capable of creating complex scientific inventions, including brain-enhancing helmets, dream-invading devices, portals to several different dimensions, and the world's first amusement park inside the body of a living human</p>
          <p>Since going into retirement he's decided to begin his new journey into investment planetry. Find the planet of your dreams here.	Ricks provides many services which may include the analysis of planetry offers and interviewing prospective intergalactic species.</p>
          <p>Call Rick now on <a href="tel:+32 678 4553">+32 678 4553</a></p>
        </div>
        <div className="col-md-4">
          <img className=" p-t-3 img-responsive" alt="Planets" src="https://nerdist.com/wp-content/uploads/2017/08/Rick-and-Morty-Portal.jpg" />
        </div>
      </div>
    );
  }
}

export default AboutSection;

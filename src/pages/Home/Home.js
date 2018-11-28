import './Home.css';
import React, { Component } from 'react';
import bgImage from '../../assets/images/banner.png';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id='banner' style={{ backgroundImage: `url("${bgImage}")` }}>
          <div className='layover'>
            <h1>1638 Waters Edge Ln</h1>
            <h1>Reston, VA</h1>
            <h2>
              <em>$850,000</em>
            </h2>
          </div>
        </div>
        <div className='headline'>
          <h1>Beautiful Lakefront Home</h1>
          <h3>Located on Lake Anne, Minutes from Reston Town Center </h3>
        </div>
      </div>
    );
  }
}

export default Home;

import './Home.css';
import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <div id='home'>
        <div
          id='banner'
          style={{
            backgroundImage: `url("/carousel/full/view from bsmt bedrm.jpg")`
          }}
        >
          <div className='layover'>
            <h1>1638 Waters Edge Ln</h1>
            <h1>Reston, VA</h1>
            <h2>
              <em>$850,000</em>
            </h2>
          </div>
        </div>
        <hr />
        <div className='headline'>
          <h1>Beautiful Lakefront Home</h1>
          <h3>Located on Lake Anne, Minutes from Reston Town Center </h3>
        </div>
        <hr />
        <div className='main-content'>
          <div className='content-box'>
            <img src='https://picsum.photos/500/400/?random' alt='random-img' />
            <h1>4 Bed 3.5 Bath Property</h1>
          </div>
          <div className='content-box'>
            <h1>Beautiful Lake Views From Living & Dining Rooms</h1>
            <img src='https://picsum.photos/500/400/?random' alt='random-img' />
          </div>
          <div className='content-box'>
            <img src='https://picsum.photos/500/400/?random' alt='random-img' />
            <h1>Second Story Deck</h1>
          </div>
          <div className='content-box'>
            <h1>Located in Northern VA's Most Attractive Communities</h1>
            <img src='https://picsum.photos/500/400/?random' alt='random-img' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

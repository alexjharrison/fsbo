import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

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
            <img src='/carousel/full/kitchen 17.jpg' alt='kitchen' />
            <div className='content-text'>
              <h1>4 Bed 3.5 Bath Property</h1>
              <Link to='/tour'>
                <Button
                  className='p-button-raised p-button-rounded'
                  label='Take a Virtual Walkthough'
                />
              </Link>
            </div>
          </div>
          <div className='content-box rev'>
            <div className='content-text'>
              <h1>Beautiful Lake Views From Living & Dining Rooms</h1>
              <Link to='/tour'>
                <Button
                  className='p-button-raised p-button-rounded'
                  label='See the Lake Views'
                />
              </Link>
            </div>
            <img src='/carousel/full/dining rm 1.jpg' alt='dining room' />
          </div>
          <div className='content-box'>
            <img src='/carousel/full/patio lake view.jpg' alt='patio' />
            <div className='content-text'>
              <h1>Stone Walkway to Dock on the Water</h1>
              <Link to='/tour'>
                <Button
                  className='p-button-raised p-button-rounded'
                  label='Walk Around the Property'
                />
              </Link>
            </div>
          </div>
          <div className='content-box rev'>
            <div className='content-text'>
              <h1>Located in Northern VA's Most Attractive Community</h1>
              <Link to='/neighborhood'>
                <Button
                  className='p-button-raised p-button-rounded'
                  label='Explore Lake Anne & Reston'
                />
              </Link>
            </div>
            <img src='/carousel/full/lake anne 1.jpg' alt='reston' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

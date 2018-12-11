import './Details.css';
import React, { Component } from 'react';

class Details extends Component {
  state = {};
  render() {
    return (
      <div className='details'>
        <div className='inner-details'>
          <h1>Details</h1>
          <h3>Floorplan</h3>
          <a href='/Plotplan.jpg'>
            <img src='/Plotplan.jpg' alt='blueprint' />
          </a>
          <h3>House Data</h3>
          <iframe
            title='house-data-sheet'
            src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSruabGu_zWU1RxDWWhn_C6V5MavHbptu2TspOohPgDvX_lpYwatc-qcKYztMhZkAwM97c2HqhhHKx-/pubhtml?widget=true&amp;headers=false'
          />
        </div>
      </div>
    );
  }
}

export default Details;

import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div id='footer'>
        <h3>For Sale By Owner: Joan Harrison</h3>
        <h4>Phone: (571) 449-7136</h4>
        <h4>
          Email:{' '}
          <a href='mailto:restonlakehouse@gmail.com'>
            RestonLakeHouse@gmail.com
          </a>
        </h4>
        <h4>1638 Waters Edge Lane, Reston, VA 20191</h4>
      </div>
    );
  }
}

export default Footer;

import './Header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    return (
      <div id='header' className='p-grid p-justify-end'>
        <Link to='/' id='logo'>
          <h1>Reston Lake House</h1>
        </Link>
        <nav id='navbar'>
          <Link to='/tour'>Walkthrough</Link>
          <Link to='/neighborhood'>Neighborhood</Link>
          <Link to='/reston'>Reston</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Header;

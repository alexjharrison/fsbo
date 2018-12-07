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
        <div className='header-right'>
          <nav id='navbar'>
            <Link to='/tour'>Walkthrough</Link>
            <Link to='/neighborhood'>Neighborhood</Link>
            <Link to='/reston'>Reston</Link>
            <Link to='/contact' id='contact-link'>
              Contact
            </Link>
          </nav>
          <div className='under-header'>
            <p>
              FSBO: Joan Harrison: <strong>(571) 449-7136</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

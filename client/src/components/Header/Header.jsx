import './Header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

class Header extends Component {
  state = {
    sidebarVisible: false,
    page: window.location.pathname
  };
  render() {
    console.log(this.state.page);
    return (
      <div id='header' className='p-grid p-justify-end'>
        <Sidebar
          visible={this.state.sidebarVisible}
          position='right'
          onHide={e => this.setState({ sidebarVisible: false })}
          id='sidebar'
        >
          <h1>Navigation</h1>
          <nav
            onClick={e => {
              this.setState({ sidebarVisible: false });
            }}
          >
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/tour'>Walkthrough</Link>
              </li>
              <li>
                <Link to='/neighborhood'>Neighborhood</Link>
              </li>
              <li>
                <Link to='/details'>Details</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </Sidebar>
        <Link to='/' id='logo'>
          <h1>Reston Lake House</h1>
        </Link>
        <div className='header-right'>
          <nav id='navbar'>
            <Link to='/tour'>Walkthrough</Link>
            <Link to='/neighborhood'>Neighborhood</Link>
            <Link to='/details'>Details</Link>
            <Link to='/contact' id='contact-link'>
              Contact
            </Link>
          </nav>
          <div className='under-header'>
            <p>
              Coming Soon: FSBO - Joan Harrison: <strong>(571) 449-7136</strong>
            </p>
          </div>
        </div>
        <div className='nav-mobile'>
          <Button
            icon='pi pi-bars'
            onClick={e => {
              this.setState({ sidebarVisible: true });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Header;

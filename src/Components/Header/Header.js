import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="nav_bar">
        <div className='logo_container'>
          <div className="logo">Start Bootstrap</div>
          <img
            className="hamburger"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"
            alt='burger menu'
          />
        </div>
        <ul className="nav_links">
          <li className="link">Services</li>
          <li className="link">Portfolio</li>
          <li className="link">About</li>
          <li className="link">Team</li>
          <li className="link">Contact</li>
        </ul>
      </nav>
    );
  }
}

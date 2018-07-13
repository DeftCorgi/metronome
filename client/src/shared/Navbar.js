import React, { Component } from 'react';
import '../styles/nav.css';
import Octicon from 'react-component-octicons';

class Navbar extends Component {
  render() {
    const navItems = [
      { name: 'Home', link: '/', icon: 'home' },
      { name: 'Favourites', link: '/favourites', icon: 'heart' },
      { name: 'About', link: '/about', icon: 'question' }
    ];
    return (
      <nav className="Navbar">
        <h1 className="NavHeader">Metronome</h1>
        <ul className="NavList">
          {navItems.map(item => (
            <li>
              <a className="NavItem" href={item.link}>
                <Octicon className="NavItemIcon" name={item.icon} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

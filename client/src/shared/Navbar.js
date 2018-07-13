import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Link className="NavItem" to={item.link}>
                <Octicon className="NavItemIcon" name={item.icon} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

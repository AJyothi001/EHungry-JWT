// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={assets.logo} alt="logo" /></Link>
      </div>
      <ul className="links">
        <li className="nav-items"><Link to="/">Home</Link></li>
        <li className="nav-items"><Link to="/about">About</Link></li>
        <li className="nav-items"><Link to="/menu">Menu</Link></li>
        <li className="nav-items"><Link to="/awards">Awards</Link></li>
        <li className="nav-items"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="login">
        <Link to="/login" className="nav-items">Log In</Link>
        <Link to="/register" className="nav-items">Register</Link>
        <div></div>
        <Link to="/" className="nav-items">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li className="p__opensans"><Link to="/about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li className="p__opensans"><Link to="/menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li className="p__opensans"><Link to="/awards" onClick={() => setToggleMenu(false)}>Awards</Link></li>
              <li className="p__opensans"><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
      <img src="/images/logo.png" alt="logo.png" className="navbar-img" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

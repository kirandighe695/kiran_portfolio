import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Profile from "../../styles/assets/kiran.jpg";
import logo from "../../styles/assets/logo.png";
import '../../styles/Header.scss';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="profile-circle">
        <img src={Profile} alt="Profile" />
      </div>

      <img src={logo} alt='logo' className='logo'/>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#service" onClick={closeMenu}>Service</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;


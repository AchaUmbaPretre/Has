import React, { useEffect, useState } from 'react';
import './topBar.scss';
import logo from './../../img/log.jpeg'

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Applique le style scrolled après 50px de défilement
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar_wrapper">
        {/* Logo */}
        <div className="topbar_left">
          <img src={logo} alt="" className="logo" />
        </div>

        {/* Navigation */}
        <nav className="topbar_right" aria-label="Main Navigation">
          <ul className="topbar_ul">
            <li className="topbar_li">
              <a href="#accueil" className="topbar_link">Accueil</a>
            </li>
            <li className="topbar_li">
              <a href="#services" className="topbar_link">Services</a>
            </li>
            <li className="topbar_li">
              <a href="#about" className="topbar_link">À propos</a>
            </li>
            <li className="topbar_li">
              <a href="#contact" className="topbar_link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;

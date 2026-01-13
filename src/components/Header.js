// components/Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Companies', href: '#companies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">M</div>
          <div>
            <h1 className="logo-text">Miposh Group</h1>
            <p className="logo-subtext">Innovation Across Industries</p>
          </div>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
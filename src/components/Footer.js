// components/Footer.js
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Companies', href: '#companies' },
    { name: 'Careers', href: '#' },
    { name: 'Investor Relations', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const contactInfo = [
    { icon: <Phone size={18} />, text: '+(234) 9162197991, +(234) 7061693823' },
    { icon: <Mail size={18} />, text: ' info@miposhtravels.com ' },
    { icon: <MapPin size={18} />, text: '39, Ajose Adeogun street. Peace Mass Plaza, Utako Abuja.'},
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Linkedin />, href: '#' },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">M</div>
              <div>
                <h2 className="logo-text">Miposh Group</h2>
                <p className="logo-subtext">Innovation Across Industries</p>
              </div>
            </div>
            <p className="footer-description">
              A diversified business conglomerate driving innovation and excellence 
              across multiple industries to create sustainable value for our stakeholders.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="link-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              {contactInfo.map((item, index) => (
                <li key={index} className="contact-item">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="social-icon"
                aria-label={`Follow us on ${social.icon.type.displayName}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Miposh Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/MyBusinessWebsite.js
import React, { useState } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const showSettings = (event) => {
    event.preventDefault();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>My Business</h1>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
      </header>
      <div className="content">
        <div className="hero">
          <h1>Welcome to My Business</h1>
        </div>
        <div className="three-columns">
          <div className="column">
            <h2>Column 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis maxime quae veritatis error et laborum officia sint nobis accusamus vero suscipit veniam ipsa, quia perferendis sapiente? Corrupti, quisquam. Soluta?</p>
          </div>
          <div className="column">
            <h2>Column 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis maxime quae veritatis error et laborum officia sint nobis accusamus vero suscipit veniam ipsa, quia perferendis sapiente? Corrupti, quisquam. Soluta?</p>
          </div>
          <div className="column">
            <h2>Column 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis maxime quae veritatis error et laborum officia sint nobis accusamus vero suscipit veniam ipsa, quia perferendis sapiente? Corrupti, quisquam. Soluta?</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Business. All rights reserved.</p>
        <div className="footer-links">
          <a className="footer-link" href="/">Home</a>
          <a className="footer-link" href="/about">About</a>
          <a className="footer-link" href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

// src/components/TemplatePage.js
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../App.css"

const TemplatePage = ({ title, columns }) => {
  return (
    <div className="App">
      <header className="header">
        <h1>SCU</h1>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </header>
      <div className="content">
        <div className="hero">
          <h1>{title}</h1>
        </div>
        <div className="Content-block">
            <h1>Content</h1>
        </div>
        <div className="three-columns">
          {columns.map((column, index) => (
            <div className="column" key={index}>
              <h2>{column.heading}</h2>
              <p>{column.content}</p>
              <button className="scu-button">{column.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Business. All rights reserved.</p>
        <div className="footer-links">
          <a className="footer-link" href="/">
            Home
          </a>
          <a className="footer-link" href="/about">
            About
          </a>
          <a className="footer-link" href="/contact">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TemplatePage;

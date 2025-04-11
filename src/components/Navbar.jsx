import React from "react";
import { useState } from "react";
import logo from "../assets/serene--logo.png";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
        <div className="container">
          <img src={logo} alt="Serene Logo" width={320} draggable="false" />

          <button
            className="navbar-toggler p-1 ms-auto"
            type="button"
            onClick={handleToggle}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center Raleway">
              <li className="nav-item">
                <a className="nav-link mx-2" href="#carouselExampleCaptions">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#about-section">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#whyus-section">
                  Why Us?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#products-section">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#contact-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

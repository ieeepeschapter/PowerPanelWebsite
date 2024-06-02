import React from "react";
import "../index.css";
import { Link } from 'react-router-dom';  

const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px",
      }}
    >
      <div className="container-fluid ">
        <div
          style={{
            display: "flex",
            flex: 10,
            alignItems: "flex-start",
            height: "24px",
          }}
        >
          <img
            src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          ></img>
          <p className="mx-2">Navbar</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ flex: 1 }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" style={{}}>
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item" style={{}}>
              <Link className="nav-link" to="/members">
                Members
              </Link>
            </li>
            <li className="nav-item" style={{}}>
              <Link className="nav-link" to="/sponsors">
                Sponsors
              </Link>
            </li>
            <li className="nav-item" style={{}}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Join
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

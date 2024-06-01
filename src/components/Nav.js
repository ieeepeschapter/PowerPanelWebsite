import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px",
      }}
    >
      <div className="container-fluid ">
        <div style={{ display: "flex", flex: 10, alignItems: "flex-start" , height:"24px"}}>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" style={{}}>
              <a className="nav-link" href="/">
                Events
              </a>
            </li>
            <li className="nav-item" style={{}}>
              <a className="nav-link" href="/">
                Members
              </a>
            </li>
            <li className="nav-item" style={{}}>
              <a className="nav-link" href="/">
                Sponsors
              </a>
            </li>
            <li className="nav-item" style={{}}>
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Join
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

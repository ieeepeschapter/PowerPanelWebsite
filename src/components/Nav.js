import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import homeData from "../data/raw/home.json"

const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px",
        background:
          "linear-gradient(270deg, rgb(252, 176, 76),  rgb(252, 176, 76), rgb(252, 115, 60),  rgb(252, 176, 76))",
        fontSize: "1.2rem",
      }}
    >
      <div className="container-fluid ">
        <div
          style={{
            display: "flex",
            flex: 10,
            alignItems: "flex-start",
            height: "40px",
          }}
        >
          <img
            src={`./assets/home/${homeData.chapterDetails.smallLogo}`}
            alt="Logo"
            width="auto"
            height="40"
            className="d-inline-block align-text-top"
          ></img>
          <p
            className="mx-2"
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            {homeData.chapterDetails.chapterShortName}
          </p>
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
        >
          <ul
            className="navbar-nav"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
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

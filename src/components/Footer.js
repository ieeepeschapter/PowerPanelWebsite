import React from "react";
import { Link } from "react-router-dom";
import FooterQuickLinkItem from "./Utils/FooterQuickLinkItem";

const Footer = () => {
  const footerTextFamilyStyle = {
    fontFamily: '"Lato", sans-serif',
    color: "#fff",
    fontSize: "1.2rem",
  };

  const footerDetailsTextStyle = {
    fontFamily: '"Josefin Sans", sans-serif',
    fontSize: "0.9rem",
    color: "rgb(187,187,187)",
  };
  return (
    <div
      className="mt-4"
      style={{
        background: "#25272B",
        color: "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="container row m-0 pt-5 pb-3">
        <div className="col-md-4" style={{ height: "auto" }}>
          <div className="mx-3">
            <img src="https://ieeentc.github.io/Home/3b99491f4acc60738aab2c475f041902.jpg"></img>
            <div
              class="mt-3"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div class="social-icons">
                <a href="https://github.com/sandeep03edu" target="blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/sandeep03edu" target="blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/sandeep03edu/"
                  target="blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sandeep03edu/"
                  target="blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://discord.com/invite/sandeep03edu"
                  target="blank"
                >
                  <i class="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mx-3">
            <h3 style={footerTextFamilyStyle}>
              IEEE Nanotechnology Council Student Chapter
            </h3>
            <div className="span-quick-links mb-4"></div>

            <p style={footerDetailsTextStyle}>
              Ieee is the world's largest technical professional organization
              Dedicated to advancing technology for the benefit of humanity. Iee
              Aims to serve professionals involved in all aspects of the
              Electrical, electronics and computing fields and related areas of
              Science and technology with the necessary resources for the
              Progression of modern civilization.
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="mx-3"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
            <h3 style={footerTextFamilyStyle}>Quick Links</h3>
            <div className="span-quick-links mb-4"></div>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Home"} />
            </Link>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Events"} />
            </Link>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Members"} />
            </Link>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Sopnsors"} />
            </Link>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Contact"} />
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          height: "1px",
          width: "100%",
        }}
        class="mb-3 mt-2"
      />

      <p className="pb-2" style={{ color: "#bbbbbb" }}>
        Copyright © 2024 IEEE Nanotechnology Council Student Chapter : IIT Patna,
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

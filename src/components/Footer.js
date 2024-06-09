import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterQuickLinkItem from "./Utils/FooterQuickLinkItem";
import homeData from "../data/raw/home.json";
import SocialMedia from "./Utils/SocialMedia";

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
      <div className="row my-0 mx-3 pt-5 pb-3">
        <div className="col-md-3" style={{ height: "auto" }}>
          <div className="mx-3">
            <img src={`./assets/home/${homeData.chapterDetails.footerLogo}`} />
            <div
              className="my-3"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <SocialMedia socialMedias={homeData.socialMedia} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mx-3">
            <h3 className="mt-3" style={footerTextFamilyStyle}>
              {homeData.chapterDetails.chapterName}
            </h3>
            <div className="span-quick-links mb-4"></div>

            <p style={footerDetailsTextStyle}>
              {homeData.chapterDetails.abouUsSmall}
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
            <h3 className="mt-3" style={footerTextFamilyStyle}>
              Quick Links
            </h3>
            <div className="span-quick-links mb-4"></div>
            <Link to="/" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Home"} />
            </Link>
            <Link to="/events" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Events"} />
            </Link>
            <Link to="/members" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Members"} />
            </Link>
            <Link to="/sponsors" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Spnsors"} />
            </Link>
            <Link to="/contact" style={{ width: "fit-content" }}>
              <FooterQuickLinkItem label={"Contact"} />
            </Link>
          </div>
        </div>

        <div className="col-md-3" style={{ height: "auto"}}>
          <div className="mx-1">
            <img src={`./assets/home/${homeData.chapterDetails.quickLinksLogo}`} />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          height: "1px",
          width: "100%",
        }}
        className="mb-3 mt-2"
      />

      <p className="pb-2 mx-4" style={{ color: "#bbbbbb" }}>
        Copyright © 2024 {homeData.chapterDetails.chapterName} : IIT Patna, All
        Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

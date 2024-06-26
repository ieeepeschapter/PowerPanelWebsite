import React, { useState } from "react";
import "./Contact.css";
import TwoLabelHeader from "./Utils/TwoLabelHeader";
import SocialMedia from "./Utils/SocialMedia";
import homeData from "../data/raw/home.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      emailId.trim().length === 0 ||
      message.trim().length === 0
    ) {
      return;
    }
    window.open(
      `mailto:${homeData.chapterDetails.contactEmail}?subject=Query%20from%20${emailId}&body=${name}%20has%20sent%20below%20message:%0A%0A${message}`
    );
  };

  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="mt-3 text-center">
        <TwoLabelHeader first={"Contact"} second={"Us"} />
      </div>

      <div className="contact-container container my-3" id="contact-us">
        <div className="form row mx-5 ">
          <div className="contact-info col-md-6">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Email us with any questions ans queries. We would be happy to
              answer your questions.
            </p>

            <div className="info">
              <div className="information">
                <p>Indian Institute of Technology, Patna</p>
              </div>
              <div className="information">
                <a href={`mailto:${homeData.chapterDetails.contactEmail}`}>
                  {homeData.chapterDetails.contactEmail}
                </a>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>

              <SocialMedia socialMedias={homeData.socialMedia} />
            </div>
          </div>

          <div className="contact-form col-md-6">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              autoComplete="off"
              onSubmit={(e) => {
                sendEmail(e);
              }}
            >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </div>

              <div className="input-container textarea">
                <textarea
                  name="message"
                  id="contactText"
                  className="input"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                className="contact-button"
                role="button"
                onclick="sendMail(); return false"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

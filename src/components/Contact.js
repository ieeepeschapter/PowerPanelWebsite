import React, { useState } from "react";
import "./Contact.css";

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
      `mailto:test@iitp.ac.in?subject=Query%20from%20${emailId}&body=${name}%20has%20sent%20below%20message:%0A%0A${message}`
    );
  };

  return (
    <div class="contact-container container" id="contact-us">
      <div class="form row mx-5 my-3">
        <div class="contact-info col-md-6">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Email us with any questions ans queries. We would be happy to answer
            your questions.
          </p>

          <div class="info">
            <div class="information">
              <p>Indian Institute of Technology, Patna</p>
            </div>
            <div class="information">
              <p>test@iitp.ac.in</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://github.com/sandeep03edu" target="blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/sandeep03edu" target="blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/sandeep03edu/" target="blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep03edu/"
                target="blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://discord.com/invite/sandeep03edu" target="blank">
                <i class="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form col-md-6">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form
            autoComplete="off"
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input
                type="text"
                name="name"
                class="input"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="input-container">
              <input
                type="email"
                name="email"
                class="input"
                placeholder="Email"
                required
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </div>

            <div class="input-container textarea">
              <textarea
                name="message"
                id="contactText"
                class="input"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              class="contact-button"
              role="button"
              onclick="sendMail(); return false"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import BannerLeft from "../assets/contactusbanner.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="" id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name" type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Enter e-mail" type="text" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

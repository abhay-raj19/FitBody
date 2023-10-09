import React from "react";
import "../../styles/contactUs.css";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <form class="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button>Send Message</button>
        <div>
          <span class="fa fa-phone"></span> @abhayraj423
          <span class="fa fa-envelope-o"></span> rajpootabhay423@gmail.com
        </div>
      </form>
    </section>
  );
};

export default ContactUs;

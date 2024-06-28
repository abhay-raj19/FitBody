import React from "react";
import "../../styles/About.css";
import Footer from "./Footer";
import Header from "../Header/Header";
import Hero from "./Hero";

const About = () => {
  const socialMediaLinks = [
    {
      icon: "fa fa-facebook-f",
      link: "https://www.facebook.com/", // Replace with your Facebook link
    },
    {
      icon: "fa fa-instagram",
      link: "https://www.instagram.com/", // Replace with your Instagram link
    },
    {
      icon: "fa fa-twitter",
      link: "https://www.twitter.com/", // Replace with your Twitter link
    },
  ];

  return (
    <>
    <Header />
    <section id="about-us">
      <div className="container">
        <div className="about_top">
          <h2 className="section_title">About Us</h2>
          <p>
            We are passionate about helping people achieve their health and
            fitness goals. We believe that exercise is a
            powerful tool for transformation, not just physically but also
            mentally and emotionally.
          </p>
        </div>
        <div className="about_content">
          <p>
            Our team consists of certified trainers who are not only
            knowledgeable but also genuinely care about your success. They are
            committed to providing personalized guidance, motivation, and
            encouragement to help you push your limits and achieve results you
            never thought possible.
          </p>
          <h3>Here's what sets us apart:</h3>
          <ul>
            <li>
              <b>A welcoming and inclusive atmosphere:</b> We believe in creating a
              space where everyone feels comfortable, regardless of their
              fitness background.
            </li>
            <li>
              <b>Variety and flexibility:</b> We offer a wide range of classes,
              programs, and equipment to cater to different needs and
              preferences. We understand that schedules can be busy, so we
              provide flexible options to fit your lifestyle.
            </li>
            <li>
              <b>Holistic approach to wellness:</b> We go beyond just physical
              training. We offer resources and guidance to help you integrate
              healthy habits into all aspects of your life.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;

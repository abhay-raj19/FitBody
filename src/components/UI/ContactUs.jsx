import React, { useState } from "react";
import toast from "react-hot-toast";
import "../../styles/contactUs.css";
import Lottie from "lottie-react";
import ContactAnimation from "../../assets/JSON/contactus.json";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (formData.name === "" || formData.name === null) {
      toast.error("please enter your name");
    } else if (formData.email === "" || formData.email === null) {
      toast.error("please enter your email");
    } else if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email");
    } else if (formData.message === "" || formData.message === null) {
      toast.error("please provide a message");
    } else {
      toast.success("Form submitted successfully");
      console.log("contact form: ", formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact-us" className="form">
      <div className="w-full form grid justify-center items-center">
        <div className="contact-animation">
          <Lottie animationData={ContactAnimation} />
        </div>
        <div className="contact-form-container">
          <h1 className="heading text-center">Contact Us</h1>
          {/* contact-us form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="Message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="text-end">
              <button className="submit" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

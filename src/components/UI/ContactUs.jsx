import React, { useState } from "react";
import toast from "react-hot-toast";
import "../../styles/contactUs.css";

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
      <div className="w-full form flex justify-center">
        <div className="contact-us">
          <h1 className="heading text-center">Contact Us</h1>
          {/* contact-us form */}
          <div className="">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
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
      </div>
    </section>
  );
};

export default ContactUs;

/**<section id="contact-us" className="form">
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact"></div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div style={{color: "red "}} className="error-message">{errors.name}</div>}
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div  style={{color: "red "}} className="error-message">{errors.email}</div>}
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && <div style={{color: "red "}}  className="error-message">{errors.message}</div>}
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" onClick={handleSubmit}>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */

import React, { useState } from "react";
import "../../styles/contactUs.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      toast.error("Name is required")
      newErrors.name = "Name is required";
    }

   else if (!formData.email.trim()) {
    toast.error("Email is required")
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      toast.error("Invalid email address")
      newErrors.email = "Invalid email address";
    }else if (!formData.message.trim()) {
      toast.error("Message is required")
      newErrors.message = "Message is required";
    }

   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      console.log("Form data:", formData);
      toast.success("Thanks for contacting us!")
    }
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact-us" className="form">
   
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
              <ToastContainer position="top-right" />
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
                   
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                   
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                   
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
    </section>
  );
};

export default ContactUs;

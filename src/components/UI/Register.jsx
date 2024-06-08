import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../../styles/register.css";


const Register = () => {
    const initialFormData = {
        name: "",
        email: "",
        age: "",
        contact: "",
        panNumber: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    const validateForm = () => {
        if (formData.name === "" || formData.name === null) {
            toast.error("Please enter your name");
            return false;
        } else if (formData.email === "" || formData.email === null) {
            toast.error("Please enter your email");
            return false;
        } else if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email");
            return false;
        } else if (formData.age === "" || formData.age === null) {
            toast.error("Please provide your age");
            return false;
        } else if (formData.contact === "" || formData.contact === null) {
            toast.error("Please provide your phone number");
            return false;
        } else if (isNaN(formData.contact)) {
            toast.error("Please enter a valid phone number");
            return false;
        }
        else if (formData.panNumber === "" || formData.panNumber === null) {
            toast.error("Please provide your PAN number");
            return false;
        } else if (formData.password === "" || formData.password === null) {
            toast.error("Please enter a password");
            return false;
        } else if (!isValidPassword(formData.password)) {
            toast.error("Please enter a valid password");
            return false;
        } else {
            return true;
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        return passwordPattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success("Registered successfully", {
                duration: 3000, // Duration in milliseconds (3 seconds)
                position: "top-center",
            }
            );
            console.log("Form data:", formData);
            setFormData(initialFormData);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section id="contact-us" className="form">
            <Toaster />
            <div className="w-full form grid justify-center items-center">
                {/* <div className="contact-animation">
                    <Lottie animationData={ContactAnimation} />
                </div> */}
                <div className="register-img">
                    <img src="./image.png" width={500} ></img>
                </div>
                <div className="contact-form-container">
                    <h1 className="heading text-center">Register</h1>
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
                            <input
                                type="number"
                                placeholder="Phone Number"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="PAN number"
                                name="panNumber"
                                value={formData.panNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-end">
                            <button className="submit" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                    <div>
                        <a href="/login">Already have an account?  <span style={{fontWeight:900}}>Login Here.</span> </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;

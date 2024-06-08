import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../../styles/register.css";
import Lottie from "lottie-react";
import ContactAnimation from "../../assets/JSON/contactus.json";

const Login = () => {
    const initialFormData = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    const validateForm = () => {
        if (formData.email === "" || formData.email === null) {
            toast.error("Please enter your email");
            return false;
        } else if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email");
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
            toast.success("Logged-in successfully", {
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
            <div className="register-img">
                    <img src="./image.png" width={500}></img>
                </div>
                <div className="contact-form-container">
                    <h1 className="heading text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
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
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-end">
                            <button className="submit" type="submit">
                                Login
                            </button>
                        </div>
                        <div>
                            <a href="/register">New user ? <span style={{fontWeight:900}}>Register Here.</span> </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;

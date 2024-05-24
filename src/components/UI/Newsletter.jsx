import React, { useState } from "react";
import '../../styles/Newsletter.css'; // Import the CSS file
import axios from "axios";

const Newsletter = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        setSubscriberEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!subscriberEmail) {
            setMessage('Please enter a valid email address.');
            return;
        }
        const subscriber = {
            email: subscriberEmail
        };

        console.log(subscriberEmail);

        await axios
        .post("https://localhost:5173/api/subscriber/",subscriber) // here put the backend deployed link in place of localhost
        .then((response)=>{
            console.log("Successfully added subscriber:",response)
        })
        .catch((error)=>{
            console.log(error);
            console.log("Error occured adding subscriber:", error);
            setMessage('Failed to subscribe. Please try again later.');
        })
    }

    return (
        <div className="newsletter-container" data-aos="fade-up" data-aos-duration="1500" >
            <div className="newsletter-content">
                <h4 className="newsletter-title">Newsletter</h4>
                <h2 className="newsletter-subtitle">Sign up for latest updates and offers</h2>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input 
                        onChange={handleChange}
                        name="subscriberEmail"
                        type="text"
                        placeholder="Email Address"
                        className="newsletter-input"
                    />
                    <button className="newsletter-button">Subscribe</button>
                </form>
                {message && <p>{message}</p>}
                <h5 className="newsletter-policy">Will be used in accordance with our policy</h5>
            </div>
        </div>
    );
};

export default Newsletter;

import React, { useState } from "react";
import '../../styles/Newsletter.css'; // Import the CSS file

const Newsletter = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');

    const handleChange = (e) => {
        setSubscriberEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
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
                <h5 className="newsletter-policy">Will be used in accordance with our policy</h5>
            </div>
        </div>
    );
};

export default Newsletter;

import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from './Footer'
import '../../styles/PrivacyPolicy.css'

const PrivacyPolicy = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <>
        <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
         <Header className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
         <div className="privacy-policy">
            <h1>Privacy Policy</h1>
            <p>Last Updated: May 23, 2024</p>
            <p>Welcome to FitBody, Fitness and exercise are the keys that unlock the door to a healthier, happier, and more vibrant life. FitBody is the growing platform for gym enthusiasts, where they can choose their respective domains and pricing categories. We are happy to invite you to join our gym community.</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect various types of information in connection with the services we provide, including:</p>
            <ul>
                <li>Information you provide to us directly.</li>
                <li>Information we collect about your use of our services.</li>
                <li>Information from third-party sources.</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
                <li>Provide, operate, and maintain our platform.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Understand and analyze how you use our platform.</li>
            </ul>
            
            <h2>3. Sharing Your Information</h2>
            <p>We may share your information with third parties under the following circumstances:</p>
            <ul>
                <li>With your consent.</li>
                <li>For external processing by trusted partners.</li>
                <li>For legal reasons or to prevent harm.</li>
            </ul>
            
            <h2>4. Security of Your Information</h2>
            <p>We use a variety of security measures to maintain the safety of your personal information.</p>
            
            <h2>5. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data.</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us:</p>
            <ul>
                <li>By email: support@fitbody.com</li>
            </ul>
        </div>
         </div>
        <Footer />
        </>
    );
};



export default PrivacyPolicy;

import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../UI/Footer';
import "../../styles/error.css";



const Error = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <>
            <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
                <Header className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                <div className="not-found-container">
                    <div className="content">
                        <p className="content-text">Oops! It looks like you're lost.</p>
                        <a href="/" className="home-button">
                            Go to Homepage
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
            
        </>
    );
};

export default Error;

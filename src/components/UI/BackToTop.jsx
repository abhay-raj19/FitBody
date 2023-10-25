import React from 'react'
import { useState, useEffect } from 'react';
import "../../styles/BackToTop.css"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={backToTop}
        >
            <i class="ri-arrow-up-s-line"></i>
        </div>
    )
}

export default BackToTop
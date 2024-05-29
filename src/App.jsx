import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Pricing from "./components/UI/Pricing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";
import ContactUs from "./components/UI/ContactUs";
import BackToTop from "./components/UI/BackToTop";
import Classes from "./components/UI/Classes";
import Diet from "./components/UI/Diet";
import { Register } from "./components/UI/Register";
import { useState, useEffect } from "react";
import Aos from "aos";
import LocomotiveScroll from 'locomotive-scroll';
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#root'),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const [isDarkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
            <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            <Hero />
            <Exercises />
            <Start />
            <Pricing />
            <Testimonials />
            <ContactUs />
            <Footer />
            <BackToTop />
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </Router>
  );
}

export default App;

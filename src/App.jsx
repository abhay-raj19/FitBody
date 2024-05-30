import { useEffect, useState } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Pricing from "./components/UI/Pricing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";
import ContactUs from "./components/UI/ContactUs";
import BackToTop from "./components/UI/BackToTop";
import LocomotiveScroll from 'locomotive-scroll';
import Classes from "./components/UI/Classes";
import Diet from "./components/UI/Diet";
import Register from "./components/UI/Register";
import Login from "./components/UI/Login";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    Aos.init();
  }, []);

  const [isDarkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <>
      <Router>
          <Routes>
          <Route path="/" element={<div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
            <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            <Hero />
            <Exercises />
            <Start />
            <Pricing />
            <Testimonials />
            <ContactUs />
            <Footer />
            <BackToTop />
          </div>} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

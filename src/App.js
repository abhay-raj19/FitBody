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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [isDarkMode, setDarkMode] = useState(false);

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
        </Routes>
      </Router>
    </>
  );
}

export default App;

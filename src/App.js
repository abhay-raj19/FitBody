import { useEffect } from "react";
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

function App() {

  useEffect(() => {
    Aos.init()
  }, [])
  

  return ( 
    <>
    <Header/> 
    <Hero/>
    <Exercises/>
    <Start/>
    <Pricing/>
    <Testimonials/>
    <ContactUs />
    <Footer/>
    </>   
  );
}

export default App;

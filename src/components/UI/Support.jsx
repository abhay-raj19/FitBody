import React, { useState } from "react";
import toast from "react-hot-toast";
import "../../styles/support.css";
import Select from "@mui/material/Select";
// import Lottie from "lottie-react";
// import ContactAnimation from "../../assets/JSON/contactus.json";

const Support = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); 
    } else {
      setOpenFAQ(index);
    }
  };


  return (
    <>
      <section className="support_section">
        <h2 className="support_title">FAQ's</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span
                  className={openFAQ === index ? "faq-icon open" : "faq-icon"}
                >
                  ▼
                </span>
              </div>
              <div
                className={openFAQ === index ? "faq-answer show" : "faq-answer"}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Support;

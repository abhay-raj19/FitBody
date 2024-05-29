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
  const faqs = [
    {
      question: "How can I upgrade my current plan?",
      answer:
        "You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.",
    },
    {
      question: "How often are new free workout videos added?",
      answer:
        "Yes, you can customize your invoices by adding additional details that you deem necessary.",
    },
    {
        question: "Can I cancel my subscription at any time and get refund?",
        answer:
          "Yes, you can customize your invoices by adding additional details that you deem necessary.",
      },
      {
        question: "Who can I contact if I have issues or need support with my plan?",
        answer:
          "Yes, you can customize your invoices by adding additional details that you deem necessary.",
      },
      {
        question: "Do you offer nutritional advice or meal plans to complement the workout programs?",
        answer:
          "Yes, you can customize your invoices by adding additional details that you deem necessary.",
      },
      {
        question: "What qualifications do the trainers in the gym have?",
        answer:
          "Yes, you can customize your invoices by adding additional details that you deem necessary.",
      },
      {
        question: "Are there any age restrictions for using the gym plan?",
        answer:
          "Yes, you can customize your invoices by adding additional details that you deem necessary.",
      },
  ];


  return (
    <>
      <section className="support_section" id="support">
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
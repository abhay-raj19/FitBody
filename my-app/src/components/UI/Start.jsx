import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start_content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section_title">
              Ready to make a <span className="highlights">Change?</span>
            </h2>
            <p>
              {" "}
              Feeling ready to make a change in your exercise routine is an
              empowering moment. It's the starting point of a journey towards a
              healthier, stronger you. Your commitment to this change is the
              first step on the path to improved fitness and well-being. Embrace
              this motivation, set your goals, and take that first step with
              determination – you're on the road to a healthier, happier you.{" "}
            </p>

            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;

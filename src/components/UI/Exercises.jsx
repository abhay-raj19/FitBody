import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benifits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            You'll discover the transformative power it holds in shaping a life
            filled with lasting health, energy, and joy.
          </p>
        </div>

        {/* =============Excersise list============ */}
        <div className="exercise_wrapper">
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>
                Exercise improves cardiovascular health, reducing the risk of
                heart disease and promoting a longer, healthier life
              </p>
            </div>
          </div>
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise_content">
              <h4>Increased Flexibility</h4>
              <p>
                Exercise enhances flexibility, leading to improved range of
                motion and reduced risk of injury.
              </p>
            </div>
          </div>
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Exercise lowers blood pressure, reducing the risk of
                hypertension and related health issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;

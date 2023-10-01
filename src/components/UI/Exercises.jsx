import React from 'react'
import "../../styles/exercises.css";
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'



const Exercises = () => {

    return (
        <section id="schedule">
            <div className="container exercise_container">
            <div className="exercise_top">
                <h2 className="section_title">
                    Benifits of <span className="highlights">Exercise</span>
                </h2>
                <p>Exercise offers a wide range of physical, mental, and emotional benefits. Incorporating regular physical activity into your life can have a significant positive impact on your overall well-being..</p>
            </div>

            {/* =============Excersise list============ */}
            <div className="exercise_wrapper">
                <div className="exercise_item" data-aos='zoom-in'
                         data-aos-duration='1500'>
                    <span className="exercise_icon">
                        <img src={lunges} alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>A healthy life is characterized by a balanced approach to physical, mental, and emotional well-being. It involves regular exercise, nutritious eating, adequate sleep, and stress management. </p>
                    </div>
                </div>
                <div className="exercise_item" data-aos='zoom-in'
                         data-aos-duration='1500'>
                    <span className="exercise_icon" >
                        <img src={yoga} alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Increased Flexibility</h4>
                        <p>Regular stretching exercises and yoga can help achieve this. Improved flexibility contributes to better posture, reduced risk of injuries, and increased agility, making daily activities and physical performance more comfortable and efficient.</p>
                    </div>
                </div>
                <div className="exercise_item" data-aos='zoom-in'
                         data-aos-duration='1500'>
                    <span className="exercise_icon">
                        <img src={extended} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Reducing Boold Pressure</h4>
                        <p> Lifestyle changes like a balanced diet low in sodium, regular exercise, stress management, and limiting alcohol can help lower high blood pressure. Medications may also be prescribed.
                        </p>
                    </div>
                </div>





            </div>
        </div>
        </section>

    );
};

export default Exercises;
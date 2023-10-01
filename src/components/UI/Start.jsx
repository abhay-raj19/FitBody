import React from 'react'
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainerImg} alt="" data-aos='fade-left'
                         data-aos-duration='1500' />
            </div>
            <div className="start_content" data-aos='fade-right'
                         data-aos-duration='1500'>
                <h2 className="section_title">Ready to make a <span className="highlights">Change?</span></h2>
                <p>It offers inspirational content, success stories, and expert guidance, motivating individuals to take the first step towards a healthier, more active lifestyle. It's a gateway to positive transformation and personal growth.                </p>

                <button className="register_btn">Get Started</button>
            </div>
        </div>
    </div>

  </section>
};

export default Start
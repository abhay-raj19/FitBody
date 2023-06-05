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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum odio beatae repellat error. Nam rerum modi eum veniam, vitae facere?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perspinventore aliquam ab quae esse voluptate sed facere officiis? Temporibus.
                </p>

                <button className="register_btn">Get Started</button>
            </div>
        </div>
    </div>

  </section>
};

export default Start
import React from 'react'
import heroIMG from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'
import '../../styles/hero.css';

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="hero_wrapper">

                    {/* ======== Hero content======== */}

                    <div className="hero_content">
                        <h2
                         className='section_title'
                         data-aos='fade-up'
                         data-aos-duration='1500'
                         >Exercise is the key to a
                            <span className="highlights"> Healthy </span> Lifestyle</h2>
                        <p data-aos='fade-up'
                        data-aos-delay='100'
                         data-aos-duration='1800'> Make exercise a daily habit.
                            <br />
                            Exercise isn't just the key; it's the driving force  <br />that propels you toward a life of boundless health and vitality
 </p>
                        <div className="hero_btns" data-aos='fade-up'
                        data-aos-delay='200'
                         data-aos-duration='2000'>
                            <button className="register_btn">Get Started</button>
                            <button className="watch_btn">
                                <span>
                                    <i class="ri-play-fill"></i>
                                </span>
                                <span className="watch_video">Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* ======Hero img====== */}
                    <div className="hero_img">
                        <div className="hero_img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box_img">
                                            <img src={heroIMG} alt="" className='main_img' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heart_rate" data-aos='fade-right'
                         data-aos-duration='1500'>
                                <h5>Heart Rate</h5>
                                <span><i class="ri-heart-pulse-fill"></i></span>
                                <br />
                                <h5>2567 BMP</h5>
                            </div>

                            <div className="gym_location" data-aos='fade-left'
                         data-aos-duration='1500'>
                                <span><i class="ri-map-pin-2-fill"></i></span>
                                <h5>Find a new<br/> gym near you</h5>
                            </div>


                            <div className="dumble_icon" data-aos='fade-down'
                         data-aos-duration='1500'>
                                <img src={dumbleIcon} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
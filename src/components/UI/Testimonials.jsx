import React from 'react'
import '../../styles/testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import aavtar01 from "../../assets/img/avatar01.png"
import aavtar02 from "../../assets/img/avatar02.png"

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
    <section>
    <div className="container sliders">
        <h2 className="section_title">Testimonials</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-01">
                    <img src={aavtar01} alt="" />
                </div>
                <h4>Jasmine Fernandes</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eos labore in dolorum porro eligendi, repudiandae reiciendis voluptatibus soluta ex.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-02">
                    <img src={aavtar02} alt="" />
                </div>
                <h4>Kiyas Ferns</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eos labore in dolorum porro eligendi, repudiandae reiciendis voluptatibus soluta ex.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
                <div className="slide_img-03">
                    <img src={aavtar01} alt="" />
                </div>
                <h4>Jasmine Fernandes</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eos labore in dolorum porro eligendi, repudiandae reiciendis voluptatibus soluta ex.</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
    </>
  );
};




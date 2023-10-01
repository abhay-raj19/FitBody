import React from "react";
import "../../styles/testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import aavtar01 from "../../assets/img/avatar01.png";
import aavtar02 from "../../assets/img/avatar02.png";

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
                <p>
                  I joined this gym a few months ago, and it's been an
                  incredible journey. The trainers are top-notch, the facilities
                  are state-of-the-art, and the atmosphere is motivating. I've
                  seen significant improvements in my strength and overall
                  fitness. Highly recommended!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-02">
                  <img src={aavtar02} alt="" />
                </div>
                <h4>Kiyas Ferns</h4>
                <p>
                  Joining this gym was one of the best decisions I've ever made.
                  The trainers are incredibly knowledgeable and supportive,
                  helping me push my limits and achieve results I never thought
                  possible. The positive atmosphere and friendly members make
                  every workout enjoyable. I've not only transformed my body but
                  also my mindset towards a healthier lifestyle. I couldn't be
                  happier!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-03">
                  <img src={aavtar01} alt="" />
                </div>
                <h4>Rubini Fernandes</h4>
                <p>
                  As a busy professional, finding time for fitness was always a
                  challenge until I joined this gym. The flexible hours,
                  state-of-the-art equipment, and variety of classes have made
                  it easy to integrate exercise into my daily routine. The
                  results have been amazing – I've lost weight, gained strength,
                  and feel more energized than ever. I highly recommend this gym
                  to anyone looking to make a positive change in their life
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

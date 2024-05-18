import React from "react";
import "../../styles/testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import testinomial03 from "../../assets/img/testinomial03.jpg";
import testinomial01 from "../../assets/img/testinomial01.jpeg";
import testinomial02 from "../../assets/img/testinomial02.jpg";
import testinomial04 from "../../assets/img/testinomial04.jpg";
import testinomial05 from "../../assets/img/testinomial05.jpg";
// import required modules
import { EffectCards } from "swiper";
import Reviews from "./Reviews";

export default function App() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section_title">Testimonials</h2>
          <div className=" testimonial-container">
            {/* Testimonials for womens */}
            <Reviews />
            {/* Testimonials for mens */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_img-02">
                    <img src={testinomial01} alt="" />
                  </div>
                  <h4>Kiyas Ferns</h4>
                  <p>
                    Joining this gym was one of the best decisions I've ever
                    made. The trainers are incredibly knowledgeable and
                    supportive, helping me push my limits and achieve results I
                    never thought possible. The positive atmosphere and friendly
                    members make every workout enjoyable. I've not only
                    transformed my body but also my mindset towards a healthier
                    lifestyle. I couldn't be happier!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_img-03">
                    <img src={testinomial02} alt="" />
                  </div>
                  <h4>Rubini Fernandes</h4>
                  <p>
                    As a busy professional, finding time for fitness was always
                    a challenge until I joined this gym. The flexible hours,
                    state-of-the-art equipment, and variety of classes have made
                    it easy to integrate exercise into my daily routine. The
                    results have been amazing – I've lost weight, gained
                    strength, and feel more energized than ever. I highly
                    recommend this gym to anyone looking to make a positive
                    change in their life
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_img-01">
                    <img src={testinomial03} alt="" />
                  </div>
                  <h4>Jake D'souza</h4>
                  <p>
                    Signing up for this fitness program has been a game-changer
                    for me. The trainers here are a wealth of knowledge and
                    provide unwavering support. They've helped me break through
                    my own barriers and accomplish goals I never imagined. The
                    gym's uplifting atmosphere and the camaraderie among members
                    make every workout a joy.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_img-02">
                    <img src={testinomial04} alt="" />
                  </div>
                  <h4>Robin Thomas</h4>
                  <p>
                    I can honestly say that joining this fitness community was
                    one of the most rewarding decisions I've ever made. The
                    trainers go above and beyond, offering their expertise and
                    unwavering encouragement. They've propelled me past my own
                    limitations, helping me achieve feats I once thought
                    impossible. The gym's positive ambiance and the friendly,
                    like-minded individuals I've met have made each workout a
                    highlight of my day.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_img-03">
                    <img src={testinomial05} alt="" />
                  </div>
                  <h4>Jake Demello</h4>
                  <p>
                    Enrolling in this fitness program has been a game-changer
                    for me. The trainers are not only incredibly knowledgeable
                    but also genuinely caring and supportive. They've motivated
                    me to surpass my own expectations and achieve results I
                    could only dream of. The gym's vibrant atmosphere and the
                    welcoming community of members have made every workout an
                    enjoyable experience.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

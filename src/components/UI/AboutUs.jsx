import React, {useState} from 'react';
import "../../styles/aboutus.css";
import People from '../../assets/img/people.png';
import Ppplhover from '../../assets/img/people-hover.png';
import Place from '../../assets/img/place.png';
import Placehover from '../../assets/img/place-hover.png';
import Product from '../../assets/img/product.png';
import Producthover from '../../assets/img/product-hover.png';
import Program from '../../assets/img/program.png';
import Programhover from '../../assets/img/program-hover.png';

const AboutUs = () => {
    const [pplHovered, setPplHovered] = useState(false);
    const [placeHovered, setPlaceHovered] = useState(false);
    const [programHovered, setProgramHovered] = useState(false);
    const [productHovered, setProductHovered] = useState(false);

  return (
    <div id='about-us' style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
    <h1 className='about-us-heading'>About Us</h1>
    <div className='about-us-block'>
        <div className='about-us-community' onMouseOver={()=>setPplHovered(true)} onMouseLeave={()=>setPplHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={pplHovered ? Ppplhover : People} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Community</div>
            </div>
            <p className='about-us-blk-para'>At Fitbit, our community is our strength. We're more than just a gym; we're a family of like-minded individuals committed to supporting and motivating each other on our fitness journeys. From beginners to seasoned athletes, everyone is welcome here. Together, we celebrate victories, overcome challenges, and forge lifelong friendships.</p>
        </div>
        <div className='about-us-product' onMouseOver={()=>setProductHovered(true)} onMouseLeave={()=>setProductHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={productHovered ? Producthover : Product} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Equipments</div>
            </div>
            <p className='about-us-blk-para'>Our cutting-edge facility is equipped with everything you need to reach your fitness goals. From state-of-the-art cardio machines to a comprehensive selection of free weights and resistance training equipment, we've got you covered. Whatever your workout style, you'll find the tools you need to succeed here.</p>
        </div>
    </div>
    <div className='about-us-block'>
        <div className='about-us-location' onMouseOver={()=>setPlaceHovered(true)} onMouseLeave={()=>setPlaceHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={placeHovered ? Placehover : Place} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Locations</div>
            </div>
            <p className='about-us-blk-para'>With convenient locations in Bengaluru, Mumbai, Chennai, Delhi and Kolkata, Fitbit is easily accessible for fitness enthusiasts across the region. Whether you're a local resident or just passing through, you'll find a warm welcome and top-notch facilities at each and every one of our branches.</p>
        </div>
        <div className='about-us-event' onMouseOver={()=>setProgramHovered(true)} onMouseLeave={()=>setProgramHovered(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={programHovered ? Programhover : Program} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Events</div>
            </div>
            <p className='about-us-blk-para'>Throughout the year, we host a variety of exciting competitions and events designed to challenge and inspire our members. From weightlifting and powerlifting meets to cross-training challenges and fitness expos, there's always something exciting happening at our gym. Join us and take your fitness journey to the next level.</p>
        </div>
    </div>
    </div>
  )
}

export default AboutUs
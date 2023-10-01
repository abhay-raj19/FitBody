import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
    return (
        <section id='pricing-plan'>
            <div className="container">
                <div className="pricing_top">
                    <h2 className="section_title">
                        Gym <span className="highlights">Pricing </span>Plan
                    </h2>
                    <p>
                    Presenting a comprehensive breakdown of membership plans, fees, and payment options. Users can easily compare pricing tiers, from basic to premium packages, to find the ideal fit for their fitness goals and budget. Transparent pricing ensures informed decisions and hassle-free gym selection.
                    </p>
                </div>



                {/* ============================pricing  Wrapper======================= */}



                <div className="pricing_wrapper">
                {/* pricing card -01 Starts */}
                    <div className="pricing_item " data-aos='fade-up'
                         data-aos-duration='1500'>
                        <div className="pricing_card-top">
                            <h2 className="section_title">Regular Member</h2>
                            <h2 className="pricing section_title">$50 <span>/Month</span></h2>
                        </div>
                        <div className="services">
                        <ul>
                        <br/>
                        <br/>
                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  Unlimited access to the gym</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Customer support</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Personal trainer</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Standard Options</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>   5 Classes per week</span></li>
                </ul>
                <button className="register_btn">Join Now</button>
                <br />
                <br />
                <br />
                </div>
                </div>
                {/* pricing card -01 Ends */}

                {/* pricing card -02 Starts */}
                    <div className="pricing_item pricing_item-02" data-aos='fade-up'
                         data-aos-duration='1800'>
                        <div className="pricing_card-top">
                            <h2 className="section_title">Premium Member</h2>
                            <h2 className="pricing section_title">$70 <span>/Month</span></h2>
                        </div>
                        <div className="services">
                        <ul>
                        <br/>
                        <br/>
                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  Unlimited access to the gym</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Customer support</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Personal trainer</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Standard Options</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>   5 Classes per week</span></li>
                </ul>
                <button className="register_btn">Join Now</button>
                <br />
                <br />
                <br />
                </div>
                </div>
                {/* pricing card -02 Ends */}

                {/* pricing card -03 Starts */}
                    <div className="pricing_item pricing_item-03 " data-aos='fade-up'
                         data-aos-duration='2000'>
                        <div className="pricing_card-top">
                            <h2 className="section_title">Standard Member</h2>
                            <h2 className="pricing section_title">$100 <span>/Month</span></h2>
                        </div>
                        <div className="services">
                        <ul>
                        <br/>
                        <br/>
                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  Unlimited access to the gym</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Customer support</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Personal trainer</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Standard Options</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>   5 Classes per week</span></li>
                </ul>
                <button className="register_btn">Join Now</button>
                <br />
                <br />
                <br />
                </div>
                </div>
                {/* pricing card -03 Ends */}

                {/* pricing card -04 Starts  */}
                    {/* <div className="pricing_item pricing_item-04 ">
                        <div className="pricing_card-top">
                            <h2 className="section_title">Regular Member</h2>
                            <h2 className="pricing section_title">$50 <span>/Month</span></h2>
                        </div>
                        <div className="services">
                        <ul>
                        <br/>
                        <br/>
                <li><span> <i class="ri-checkbox-blank-circle-fill"></i>  Unlimited access to the gym</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Customer support</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Personal trainer</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>  Standard Options</span></li>
                <li><span><i class="ri-checkbox-blank-circle-fill"></i>   5 Classes per week</span></li>
                </ul>
                <button className="register_btn">Join Now</button>
                <br />
                <br />
                <br />
                </div>
                </div> */}
                {/* pricing card -04 Ends */}
                </div>
            </div>
        </section>
    )
}

export default Pricing
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore animi voluptates consequatur. Nisi, sunt odio ipsa ab soluta volulorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad odit quibusdam modi ex incidunt, laudantium totam nemo tenetur corporis.
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
import React from "react";
import "../../styles/pricing.css";
import axios from "axios";
import logo from "../../assets/img/dumble.png";

const Pricing = () => {
  const checkoutHandler = async (amount) => {
      const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");
      console.log("key: "+key)
      const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", { amount });
      console.log("Order client"+ order.amount)
      console.log("Order client"+ order.id)
      
      const options = {
        key: key,
        amount: order.amount,
        currency: "USD",
        name: "FitBody",
        description: "Transaction",
        image: logo,
        order_id: order.id,
        handler: function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#d3cef2"
        }
      };

      console.log(options)
      const rzp = new window.Razorpay(options);
      rzp.open();

  };

  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">
            Gym <span className="highlights">Pricing </span>Plan
          </h2>
          <p>
            Our gym's pricing plans are designed to cater to a range of budgets
            and <br /> fitness aspirations, making it accessible for everyone to
            achieve their health and wellness objectives.{" "}
          </p>
        </div>

        {/* ============================pricing  Wrapper======================= */}

        <div className="pricing_wrapper">
          {/* pricing card -01 Starts */}
          <div
            className="pricing_item "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing_card-top">
              <h2 className="section_title">Regular Member</h2>
              <h2 className="pricing section_title">
                $50 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <br />
                <br />
                <li>
                  <span>
                    {" "}
                    <i class="ri-checkbox-blank-circle-fill"></i> Access to the
                    gym during regular hours
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i> Use of basic
                    gym equipment and facilities.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i> Group fitness
                    classes included.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i> Locker room
                    access.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i> 5 Classes per
                    week
                  </span>
                </li>
              </ul>
              <button onClick={()=>checkoutHandler(50)} className="register_btn">Join Now</button>
              <br />
              <br />
              <br />
            </div>
          </div>
          {/* pricing card -01 Ends */}

          {/* pricing card -02 Starts */}
          <div
            className="pricing_item pricing_item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing_card-top">
              <h2 className="section_title">Premium Member</h2>
              <h2 className="pricing section_title">
                $99 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <br />
                <br />
                <li>
                  <span>
                    {" "}
                    <i class="ri-checkbox-blank-circle-fill"></i> 24/7 access to
                    the gym.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Full access to
                    all equipment and facilities
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Access to a
                    dedicated personal trainer.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Unlimited group
                    fitness classes.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Nutritional
                    guidance and meal planning.
                  </span>
                </li>
              </ul>
              <button onClick={()=>checkoutHandler(99)} className="register_btn">Join Now</button>
              <br />
              <br />
              <br />
            </div>
          </div>
          {/* pricing card -02 Ends */}

          {/* pricing card -03 Starts */}
          <div
            className="pricing_item pricing_item-03 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing_card-top">
              <h2 className="section_title">Standard Member</h2>
              <h2 className="pricing section_title">
                $59 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <br />
                <br />
                <li>
                  <span>
                    {" "}
                    <i class="ri-checkbox-blank-circle-fill"></i>24/7 access to
                    the gym.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Personalized
                    workout plans.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Locker and
                    towel service included
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Unlimited group
                    fitness classes.
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Exclusive
                    access to sauna and spa facilities
                  </span>
                </li>
              </ul>
              <button onClick={()=>checkoutHandler(59)} className="register_btn">Join Now</button>
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
  );
};


export default Pricing;
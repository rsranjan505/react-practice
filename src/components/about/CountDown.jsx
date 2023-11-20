import React from 'react'
import CountUp from 'react-countup';

export default function CountDown() {
  return (
    <>
        <div className="overflow-hidden">
  <div className="container">
    <div className="counter-sec space-top">
      <div className="th-counterup wow fadeInLeft">
        <div className="inner">
          <div className="icon">
            <img src="assets/img/icon/counter_1_1.svg" alt="" />
          </div>
          <div className="content">
            <h3 className="counter">
              <span className="odometer" data-count={26}>
              <CountUp 
              start={0}
              duration={2}
              end={26}/>
              </span>{" "}
              <span className="counter-number">+</span>
            </h3>
            <p className="counter-card_text">Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="th-counterup wow fadeInLeft">
        <div className="inner">
          <div className="icon">
            <img src="assets/img/icon/counter_1_2.svg" alt="" />
          </div>
          <div className="content">
            <h3 className="counter">
              <span className="odometer" data-count={100}>
              <CountUp start={0}
              duration={2}
              end={100}/>
              </span>{" "}
              <span className="counter-number">%</span>
            </h3>
            <p className="counter-card_text">Natural Products</p>
          </div>
        </div>
      </div>
      <div className="th-counterup wow fadeInLeft">
        <div className="inner">
          <div className="icon">
            <img src="assets/img/icon/counter_1_3.svg" alt="" />
          </div>
          <div className="content">
            <h3 className="counter">
              <span className="odometer" data-count={56}>
              <CountUp start={0}
              duration={2}
              end={56}/>
              </span>{" "}
              <span className="counter-number">k+</span>
            </h3>
            <p className="counter-card_text">Satisfied Clients</p>
          </div>
        </div>
      </div>
      <div className="th-counterup wow fadeInLeft">
        <div className="inner">
          <div className="icon">
            <img src="assets/img/icon/counter_1_4.svg" alt="" />
          </div>
          <div className="content">
            <h3 className="counter">
              
              <span className="odometer">
              <CountUp start={0}
              duration={2}
              end={36}/>
              </span>{" "}
              <span className="counter-number">+</span>
            </h3>
            <p className="counter-card_text">Specialists Team</p>
          </div>
        </div>
      </div>
    </div>
    <div className="sec-shape">
      <span className="sec-shape_img">
        <img src="assets/img/icon/girl.svg" alt="" />
      </span>
    </div>
  </div>
</div>

    
    </>
  )
}

import React from 'react'

export default function PricePackage() {
  return (
    <>
        <section className="overflow-hidden space-bottom shape-mockup-wrap">
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title style2">Pricing Package</span>{" "}
            <img src="assets/img/theme-img/title_shape_1.svg" alt="" />
            <h2 className="sec-title">Choose Your Perfect Package</h2>
            </div>
            <div className="row gy-4 align-items-center">
            <div className="col-xl-6">
                <div className="price-card wow fadeInLeft">
                <div className="price-card_img">
                    <img src="assets/img/price/price_1_1.jpg" alt="" />
                    <h4 className="price-card_price">
                    <span className="currency">$</span> 46{" "}
                    <span className="duration">Per Day</span>
                    </h4>
                </div>
                <div className="price-card_content">
                    <h3 className="box-title">Basic Package</h3>
                    <hr className="style1" />
                    <div className="available-list">
                    <ul>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Body Treatments
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Sauna Relax
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Backbone Therapy
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Geothermal Spa
                        </li>
                        <li className="unavailable">
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Body Relaxation
                        </li>
                        <li className="unavailable">
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Aroma Therapy
                        </li>
                    </ul>
                    <div className="price-btn">
                        <a href="price.html" className="th-btn">
                        Book Now
                        <i className="fa-solid fa-arrow-right ms-2" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="price-card wow fadeInRight">
                <div className="price-card_img">
                    <img src="assets/img/price/price_1_2.jpg" alt="" />
                    <h4 className="price-card_price">
                    <span className="currency">$</span> 96{" "}
                    <span className="duration">Per Day</span>
                    </h4>
                </div>
                <div className="price-card_content">
                    <h3 className="box-title">Standard Package</h3>
                    <hr className="style1" />
                    <div className="available-list">
                    <ul>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Body Treatments
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Sauna Relax
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Backbone Therapy
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Geothermal Spa
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Body Relaxation
                        </li>
                        <li>
                        <img src="assets/img/theme-img/title_left.svg" alt="" />
                        Aroma Therapy
                        </li>
                    </ul>
                    <div className="price-btn">
                        <a href="price.html" className="th-btn">
                        Book Now
                        <i className="fa-solid fa-arrow-right ms-2" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div
            className="shape-mockup jump d-none d-lg-block"
            style={{
                top:'0%',left:'0%'
            }}
        >
            <img src="assets/img/shape/leaves_3.png" alt="shape" />
        </div>
        <div
            className="shape-mockup jump d-none d-xl-block"
            style={{
                bottom:'15%',right:'0%'
            }}
        >
            <img src="assets/img/shape/leaves_2.png" alt="shape" />
        </div>
</section>

    </>
  )
}

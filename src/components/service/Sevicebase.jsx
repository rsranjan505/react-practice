import React from 'react'
import ServiceItem from './ServiceItem'
import Slider from 'react-slick'

export default function Sevicebase() {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        className:''
      };
  return (
    <>
        <section className="service-area2 overflow-hidden space shape-mockup-wrap" id="service-sec">
            <div className="container">
                <div className="row">
                    <div className="title-area text-center">
                        <span className="sub-title style2">What We Do</span>{" "}
                        <img src="assets/img/theme-img/title_shape_1.svg" alt="" />
                        <h2 className="sec-title">Professional Spa and Beauty Service</h2>
                    </div>
                </div>
                <div
                className="row slider-shadow th-carousel number-dots slick-initialized slick-slider slick-dotted"
                id="serviceSlide">
                <Slider {...settings}>
                <div className="col-md-6 col-lg-6 col-xl-4 draggable" style={{width: '313px'}}>
                    <ServiceItem
                    serimg='assets/img/icon/service_1_1.svg'
                    name='Icon'
                    title='Body Massages'
                    description='Whether youre seeking a rejuvenating facial, a soothing massage body
                    treatment'
                    />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4" style={{width: '313px'}}>
                    <ServiceItem
                        serimg='assets/img/icon/service_1_2.svg'
                        name='Icon'
                        title='Oil Therapy'
                        description='At our beauty spa salon, we offer a wide range of services tailored
                        to meet.'
                    />
                </div>
                 <div className="col-md-6 col-lg-6 col-xl-4" style={{width: '313px'}}>
                    <ServiceItem
                        serimg='assets/img/icon/service_1_3.svg'
                        name='Icon'
                        title='Aroma Therapy'
                        description='We also offer private rooms for more intimate treatments and
                        couples.'
                    />
                </div>
                 <div className="col-md-6 col-lg-6 col-xl-4" style={{width: '313px'}}>
                    <ServiceItem
                        serimg='assets/img/icon/service_1_5.svg'
                        name='Icon'
                        title='Waxing'
                        description='Relax in our serene lounge area, sip on herbal teas, and immerse
                        yourself.'
                    />
                </div>
                 <div className="col-md-6 col-lg-6 col-xl-4" style={{width: '313px'}}>
                    <ServiceItem
                        serimg='assets/img/icon/service_1_6.svg'
                        name='Icon'
                        title='Nail Manicure'
                        description='Relax in our serene lounge area, sip on herbal teas, and immerse
                        yourself.'
                    />
                </div>
                    </Slider>

                </div>
            </div>
            <div
                className="shape-mockup jump d-none d-xl-block"
                style={{
                    border: '0%', left:' 0%'
                }}
            >
                <img src="assets/img/shape/leaves_1.png" alt="shape" />
            </div>
            <div
                className="shape-mockup jump d-none d-xl-block"
                style={{
                    top: '20%', right:' 0%'
                }}
            >
                <img src="assets/img/shape/leaves_7.png" alt="shape" />
            </div>
        </section>

    </>
  )
}

import React from 'react'
import CountDown from './CountDown'
import Galaery from './Galaery'

export default function About() {
  return (
    <>
        <div className="about-sec overflow-hidden bg-smoke space" id="about-sec">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 wow fadeInLeft">
                    <div className="img-box1">
                    <div className="img1">
                        <img
                        className="tilt-active"
                        src="assets/img/normal/about_1.jpg"
                        alt="About"
                        />
                    </div>
                    <div className="img2">
                        <img
                        className="tilt-active"
                        src="assets/img/normal/about_2.jpg"
                        alt="About"
                        />
                    </div>
                    <div className="img3">
                        <img src="assets/img/shape/flower_1_3.png" alt="About" />
                    </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="ps-xl-4 wow fadeInRight">
                    <div className="title-area mb-25">
                        <span className="sub-title">
                        About Us
                        <img src="assets/img/theme-img/title_right.svg" alt="" />
                        </span>
                        <h2 className="sec-title mb-20">
                        Discover The Ultimate Spa Massage Experience
                        </h2>
                        <p className="mb-30">
                        Discover a world of tranquility, luxury, and personalized care as
                        you embark on a journey of self-care and renewal. Visit us today
                        and let us transport you to a realm of beauty and serenity.
                        </p>
                    </div>
                    <div className="about-wrapper">
                        <div className="about-info">
                        <h3 className="about-info_title h6">
                            <img src="assets/img/theme-img/title_left.svg" alt="" />
                            Personal Program
                        </h3>
                        </div>
                        <div className="about-info">
                        <h3 className="about-info_title h6">
                            <img src="assets/img/theme-img/title_left.svg" alt="" />
                            Expert Nutritionist
                        </h3>
                        </div>
                    </div>
                    <p className="mb-30">
                        We also offer private rooms for more intimate treatments and
                        couples' packages for a romantic escape.
                    </p>
                    <a href="about.html" className="th-btn">
                        Discover More
                        <i className="fa-regular fa-arrow-right ms-2" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="shape-mockup" data-top="0%" data-left="0%">
                <img src="assets/img/shape/flower_1_1.png" alt="shape" />
            </div>
            <div
                className="shape-mockup d-none d-lg-block"
                data-bottom="0%"
                data-right="0%"
            >
                <img src="assets/img/shape/flower_1_2.png" alt="shape" />
            </div>
        </div>

        <CountDown/>
        {/* <Galaery/> */}
    </>
  )
}

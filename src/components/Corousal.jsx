import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CorousalItem from './CorousalItem';
import CorousalSideItem from './CorousalSideItem';
 

export default function Corousal() {

      const settings = {
        autoplay: true,
        speed:2000,
        dots: true,
        autoplaySpeed:8000,
        fade:true
      };
       
  return (
    <>

   <section
    className="th-hero-wrapper hero-1"
    id="hero"
    style={{
        height: "750px",
        width:"100%",
        backgroundImage:'url("assets/img/bg/hero_bg_shape.png")',
        backgroundSize: "center",
        backgroundRepeat: "no-repeat",
    }}>
    <div className="hero-slider-1 th-carousel">
        <Slider { ...settings}>
            <div className="th-hero-slide">
                <div className="container">
                    <div className="row align-items-end">
                        <CorousalItem 
                        spanItem='Best Spa Massages Parlor'
                        title='Elevate Your Body And Mind With Our Spa Massages'
                        button='Explore Services'
                        themeimg='assets/img/theme-img/title_left.svg'
                        />
                        <div className="col-lg-6 col-xl-5">
                            <CorousalSideItem
                            bgimg='assets/img/hero/hero_bg_1_1.png'
                            />
                        </div>
                   
                    </div>
                </div>
            </div>

            <div className="th-hero-slide">
                <div className="container">
                    <div className="row align-items-end">
                        <CorousalItem 
                        spanItem='Welcome Spa Massages Parlor'
                        title='Spa massages offer relaxation and stress various'
                        button='Explore Services'
                        themeimg='assets/img/theme-img/title_left.svg'
                        />
                        <div className="col-lg-6 col-xl-5">
                            <CorousalSideItem
                            bgimg='assets/img/hero/hero_bg_1_2.png'
                            />
                        </div>
                   
                    </div>
                </div>
            </div>

            <div className="th-hero-slide">
                <div className="container">
                    <div className="row align-items-end">
                        <CorousalItem 
                        spanItem='Our Spa Massages Parlor'
                        title='Soothe your body and mind with spa massages.'
                        button='Explore Services'
                        themeimg='assets/img/theme-img/title_left.svg'
                        />
                        <div className="col-lg-6 col-xl-5">
                            <CorousalSideItem
                            bgimg='assets/img/hero/hero_bg_1_3.png'
                            />
                        </div>
                   
                    </div>
                </div>
            </div>

        </Slider>
    </div>
    <div
        className="shape-mockup movingX d-none d-xl-block"
        style={{
            top:'12%',
            left:'2%'
        }}
        >
            <img src="assets/img/shape/flower_shape.svg" alt="shape" />
    </div>
    <div className="shape-mockup shape2 jump" 
    style={{
        bottom:'10%',
        left:'0%'
    }}>
        <img src="assets/img/shape/flower_1_3.svg" alt="shape" />
    </div>
    <div
        className="shape-mockup hero_wrap d-none d-xl-block spin"
        style={{
            top:'3%',
            right:'38%'
        }}>
        <img src="assets/img/shape/flower_1_4.svg" alt="shape" />
    </div>
    <div
        className="hero_flower bg-repeat movingX"
        style={{
            backgroundImage:'url("assets/img/shape/flower_shape.png")'
        }}
    ></div>
</section>
    </>
  )
}

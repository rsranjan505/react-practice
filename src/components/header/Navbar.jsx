import React,{ useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const handleClick = () => setClick(!click);

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset >= 400){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }
       
    }, [scroll]);


  return (
    <>
        <div className={ click ? 'th-menu-wrapper th-body-visible' : 'th-menu-wrapper'}>
        <div className="th-menu-area">
            <div className="mobile-logo">
                <a href="index.html">
                    <img src="assets/img/logo.svg" alt="barberTree"/>
                </a>
                <div className="close-menu">
                    <button onClick={handleClick} className="th-menu-toggle">
                        <i className={ click ? 'fal fa-times' : 'fal fa-bars'}></i>
                    </button>
                </div>
            </div>
            <div className="th-mobile-menu">
                <ul>
                    <li className="menu-item-has-children"><a href="index.html">Home</a>
                    </li>
                    <li className="menu-item-has-children"><a href="#">About us</a>
                    </li>
                    <li className="menu-item-has-children"><a href="#">Services</a>
                        <ul className="sub-menu">
                            <li><a href="service.html">Services One Spa & Nail</a></li>
                            <li><a href="service-2.html">Services Two Salon & Wellness</a></li>
                            <li><a href="service-details.html">Services Details</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children"><a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
        </div>
        <header className="th-header header-layout1">
            <div className="header-top">
                <div className="container th-container">
                    <div className="row justify-content-end justify-content-lg-between align-items-center gy-2">
                        <div className="col-auto d-none d-lg-block">
                            <div className="header-links">
                                <ul>
                                    <li><i className="far fa-phone"></i><a href="tel:+256214203215">+256 214 203 215</a></li>
                                    <li><i className="far fa-envelope"></i><a href="mailto:info@rasm.com">info@rasm.com</a></li>
                                    <li><i className="fa-light fa-clock"></i>Mon - Sat: 8 AM - 15 PM Sunday Off</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="social-links"><span className="social-title">Follow Us:</span> <a
                                    href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> <a
                                    href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> <a
                                    href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i> </a><a
                                    href="https://www.youtube.com/"><i className="fab fa-youtube"></i> </a><a
                                    href="https://www.skype.com/"><i className="fa-brands fa-skype"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scroll ? 'sticky-wrapper sticky' : 'sticky-wrapper'}>
                <div className="menu-area">
                    <div className="container th-container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.svg" alt="barberTree"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto me-xl-auto">
                                <nav className="main-menu d-none d-lg-inline-block">
                                    <ul>
                                        <li className="menu-item">
                                            {/* <Link to={'/'} className={"underline" + (url === "/" ?" active" : "")}>Home
                                            </Link> */}
                                            <a href="index.html">Home</a>

                                        </li>
                                        <li className="menu-item">
                                        <a href="index.html">About</a>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="service.html">Services One Spa & Nail</a></li>
                                                <li><a href="service-2.html">Services Two Salon & Wellness</a></li>
                                                <li><a href="service-details.html">Services Details</a></li>
                                            </ul>
                                        </li>

                                        <li className="menu-item"><a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </nav>
                                <button onClick={handleClick} className="th-menu-toggle d-inline-block d-lg-none"><i className={ click ? 'fal fa-times' : 'fal fa-bars'}></i>
                                </button>
                            </div>
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-button">
                                    <a href="appointment.html" className="th-btn">Appointment Now<i className="fa-regular fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo-bg"></div>
                </div>
            </div>
        </header>
    </>
  )
}

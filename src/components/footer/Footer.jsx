import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer-wrapper footer-layout1">
            <div className="widget-area">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6 col-xl-3">
                    <div className="widget footer-widget">
                        <div className="th-widget-about">
                        <div className="about-logo">
                            <a href="index.html">
                            <img src="assets/img/logo-white.svg" alt="Rasm" />
                            </a>
                        </div>
                        <p className="about-text">
                            Centric applications productize front end portals visualize
                            front end is results and value added
                        </p>
                        <div className="working-time">
                            <span className="title">We Are Available:</span>
                            <p className="desc">Mon-Sat: 08.00 am to 5.00 pm</p>
                        </div>
                        <div className="th-social footer-social">
                            <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f" />
                            </a>{" "}
                            <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter" />
                            </a>{" "}
                            <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                            </a>{" "}
                            <a href="https://www.behance.net/">
                            <i className="fa-brands fa-behance" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Quick link</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li>
                            <a href="about.html">About Us</a>
                            </li>
                            <li>
                            <a href="booking.html">Work Gallery</a>
                            </li>
                            <li>
                            <a href="contact.html">Privacy Policy</a>
                            </li>
                            <li>
                            <a href="service.html">Our Services</a>
                            </li>
                            <li>
                            <a href="price.html">Pricing Plans</a>
                            </li>
                            <li>
                            <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-xl-auto">
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Contact Details</h3>
                        <div className="th-widget-about">
                        <h4 className="footer-info-title">Phone Number</h4>
                        <p className="footer-info">
                            <i className="fa-sharp fa-solid fa-phone" />
                            <a className="text-inherit" href="tel:+256214203215">
                            +256 214 203 215
                            </a>
                        </p>
                        <h4 className="footer-info-title">Email Address</h4>
                        <p className="footer-info">
                            <i className="fas fa-envelope" />
                            <a className="text-inherit" href="mailto:info@rasm.com">
                            info@rasm.com
                            </a>
                        </p>
                        <h4 className="footer-info-title">Office Location</h4>
                        <p className="footer-info">
                            <i className="fas fa-map-marker-alt" />
                            25 Street, 145 City Road New Town DD14, USA
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-xl-auto">
                    <div className="widget footer-widget">
                        <h4 className="widget_title">Newsletter</h4>
                        <div className="newsletter-widget">
                        <p className="md-10">
                            Sign Up to get updates &amp; news about us . Get Latest Deals
                            from Walker's Inbox to our mail address.
                        </p>
                        <div className="footer-search-contact mt-25">
                            <form>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Enter your email"
                            />
                            </form>
                            <div className="footer-btn mt-10">
                            <button type="submit" className="th-btn style3 fw-btn">
                                Subscribe Now <i className="fa-regular fa-arrow-right" />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <p className="copyright-text text-white">
                        © 2023 <a href="https://themeforest.net/user/themeholy">Rasm</a>.
                        All Rights Reserved.
                    </p>
                    </div>
                    <div className="col-lg-6">
                    <div className="footer-links">
                        <ul>
                        <li>
                            <a href="contact.html">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="contact.html">Terms &amp; Condition</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="shape-mockup" data-top="0%" data-left="0%">
                <img src="assets/img/shape/footer_shape_1.png" alt="shape" />
            </div>
            <div
                className="shape-mockup d-none d-xl-block"
                data-bottom="12%"
                data-right="0%"
            >
                <img src="assets/img/shape/footer_shape_2.png" alt="shape" />
            </div>
        </footer>

    </>
  )
}

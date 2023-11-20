import React from 'react'

export default function CorousalItem(props) {
  return (
    <>
       
        <div className="col-lg-6 col-xl-7">
            <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideindown"
                    data-ani-delay="0.2s"
                >
                    <img src={props.themeimg} alt="shape" />
                    {props.spanItem}
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideindown"
                    data-ani-delay="0.3s"
                >
                    {props.title}
                </h1>
                <div
                    className="btn-group justify-content-center justify-content-lg-start"
                    data-ani="slideindown"
                    data-ani-delay="0.4s"
                >
                    <a href="service.html" className="th-btn">
                    {props.button}
                    <i className="fa-regular fa-arrow-right ms-2" />
                    </a>
                </div>
            </div>
        </div>

    </>

  )
}

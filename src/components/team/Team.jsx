import React from 'react'

export default function Team() {
  return (
    <section
  className="team-area bg-top-center overflow-hidden space"
  data-bg-src="assets/img/bg/team_bg_1.jpg"
  style={{
    backgroundImage:'url("assets/img/bg/team_bg_1.jpg")'
  }}
>
  <div className="container">
    <div className="row justify-content-end">
      <div className="col-12">
        <div className="team-content-wrapper">
          <div className="title-area text-center">
            <span className="sub-title style2">Expert Team</span>{" "}
            <img src="assets/img/theme-img/title_shape_1.svg" alt="" />
            <h2 className="sec-title text-white">Our Experience Specialists</h2>
            <p className="sec-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="row slider-shadow th-carousel teamSlide1"
      id="teamSlide1"
      data-slide-show={3}
      data-lg-slide-show={3}
      data-md-slide-show={2}
      data-sm-slide-show={1}
      data-xs-slide-show={1}
      data-arrows="true"
    >
      <div className="col-sm-6 col-lg-4 col-xxl-3">
        <div className="th-team team-card wow fadeInUp">
          <div className="team-img">
            <img src="assets/img/team/team_1_1.jpg" alt="Team" />
          </div>
          <div className="team-card_content">
            <div className="team-content">
              <h3 className="box-title">
                <a href="team-details.html">Jenifer Lopez</a>
              </h3>
              <span className="team-desig">Specialist</span>
            </div>
            <div className="team-social">
              <div className="icon-btn">
                <i className="fa-light fa-plus" />
              </div>
              <div className="th-social">
                <a target="_blank" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a target="_blank" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
                <a target="_blank" href="https://facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xxl-3">
        <div className="th-team team-card wow fadeInDown">
          <div className="team-img">
            <img src="assets/img/team/team_1_2.jpg" alt="Team" />
          </div>
          <div className="team-card_content">
            <div className="team-content">
              <h3 className="box-title">
                <a href="team-details.html">Arlene McCoy</a>
              </h3>
              <span className="team-desig">Specialist</span>
            </div>
            <div className="team-social">
              <div className="icon-btn">
                <i className="fa-light fa-plus" />
              </div>
              <div className="th-social">
                <a target="_blank" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a target="_blank" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
                <a target="_blank" href="https://facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xxl-3">
        <div className="th-team team-card wow fadeInUp">
          <div className="team-img">
            <img src="assets/img/team/team_1_3.jpg" alt="Team" />
          </div>
          <div className="team-card_content">
            <div className="team-content">
              <h3 className="box-title">
                <a href="team-details.html">Robert Fox</a>
              </h3>
              <span className="team-desig">Specialist</span>
            </div>
            <div className="team-social">
              <div className="icon-btn">
                <i className="fa-light fa-plus" />
              </div>
              <div className="th-social">
                <a target="_blank" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a target="_blank" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
                <a target="_blank" href="https://facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xxl-3">
        <div className="th-team team-card wow fadeInDown">
          <div className="team-img">
            <img src="assets/img/team/team_1_4.jpg" alt="Team" />
          </div>
          <div className="team-card_content">
            <div className="team-content">
              <h3 className="box-title">
                <a href="team-details.html">Jade Smith</a>
              </h3>
              <span className="team-desig">Specialist</span>
            </div>
            <div className="team-social">
              <div className="icon-btn">
                <i className="fa-light fa-plus" />
              </div>
              <div className="th-social">
                <a target="_blank" href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a target="_blank" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>{" "}
                <a target="_blank" href="https://facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shape-mockup" data-top="0%" data-right="0%">
    <img src="assets/img/shape/flower_1_2.png" alt="shape" />
  </div>
</section>

  )
}

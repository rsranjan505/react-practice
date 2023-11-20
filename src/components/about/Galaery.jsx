import React from 'react'

export default function Galaery() {
  return (
    <>
        <div className="overflow-hidden space" id="gallery-sec">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="title-area text-center text-lg-start">
          <span className="sub-title">
            Our Gallery{" "}
            <img src="assets/img/theme-img/title_right.svg" alt="" />
          </span>
          <h2 className="sec-title">Latest Projects Gallery</h2>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="filter-menu indicator-active filter-menu-active">
          <button data-filter="*" className="tab-btn active" type="button">
            ALL
          </button>{" "}
          <button data-filter=".cat1" className="tab-btn" type="button">
            Massage
          </button>{" "}
          <button data-filter=".cat2" className="tab-btn" type="button">
            Waxing
          </button>{" "}
          <button data-filter=".cat3" className="tab-btn" type="button">
            Relaxing
          </button>{" "}
          <button data-filter=".cat4" className="tab-btn" type="button">
            Skin Care
          </button>
        </div>
      </div>
    </div>
    <div className="row gallery-row filter-active">
      <div className="col-xl-auto col-md-6 filter-item cat1 cat3 cat4">
        <div className="gallery-card wow fadeInUp">
          <div className="gallery-img">
            <img src="assets/img/gallery/gallery_1_1.jpg" alt="gallery image" />
          </div>
          <div className="gallery-content">
            <a
              href="assets/img/gallery/gallery_1_1.jpg"
              className="icon-btn popup-image"
            >
              <i className="fa-solid fa-arrow-up-right" />
            </a>
            <h2 className="gallery-title box-title">Body Massage</h2>
            <p className="gallery-text">Massage</p>
          </div>
        </div>
      </div>
      <div className="col-xl-auto col-md-6 filter-item cat1 cat2 cat4">
        <div className="gallery-card wow fadeInUp">
          <div className="gallery-img">
            <img src="assets/img/gallery/gallery_1_2.jpg" alt="gallery image" />
          </div>
          <div className="gallery-content">
            <a
              href="assets/img/gallery/gallery_1_2.jpg"
              className="icon-btn popup-image"
            >
              <i className="fa-solid fa-arrow-up-right" />
            </a>
            <h2 className="gallery-title box-title">Body Waxing</h2>
            <p className="gallery-text">Waxing</p>
          </div>
        </div>
      </div>
      <div className="col-xl-auto col-md-6 filter-item cat1 cat3 cat4">
        <div className="gallery-card wow fadeInUp">
          <div className="gallery-img">
            <img src="assets/img/gallery/gallery_1_3.jpg" alt="gallery image" />
          </div>
          <div className="gallery-content">
            <a
              href="assets/img/gallery/gallery_1_3.jpg"
              className="icon-btn popup-image"
            >
              <i className="fa-solid fa-arrow-up-right" />
            </a>
            <h2 className="gallery-title box-title">Body Relaxing</h2>
            <p className="gallery-text">Relaxing</p>
          </div>
        </div>
      </div>
      <div className="col-xl-auto col-md-6 filter-item cat3 cat4 cat2">
        <div className="gallery-card wow fadeInUp">
          <div className="gallery-img">
            <img src="assets/img/gallery/gallery_1_4.jpg" alt="gallery image" />
          </div>
          <div className="gallery-content">
            <a
              href="assets/img/gallery/gallery_1_4.jpg"
              className="icon-btn popup-image"
            >
              <i className="fa-solid fa-arrow-up-right" />
            </a>
            <h2 className="gallery-title box-title">Skin Care</h2>
            <p className="gallery-text">Skin Care</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="shape-mockup jump d-none d-xl-block"
    data-bottom="15%"
    data-left="0%"
  >
    <img src="assets/img/shape/leaves_1.png" alt="shape" />
  </div>
  <div
    className="shape-mockup jump d-none d-xxl-block"
    data-top="10%"
    data-right="0%"
  >
    <img src="assets/img/shape/leaves_7.png" alt="shape" />
  </div>
</div>

    
    </>
  )
}

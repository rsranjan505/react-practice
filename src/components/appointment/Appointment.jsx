import React, { useState } from 'react'
import InputText from '../form/InputText'
import SelectInput from '../form/SelectInput';

export default function Appointment() {

    const [startDate, setStartDate] = useState(null);


  return (
    <div
    className="appointment-area space"
    id="contact-sec"
    style={{
        backgroundImage:'url("assets/img/bg/appointment_bg_1.jpg")'
    }}
    >
    <div className="container">
        <div className="row">
        <div className="col-12">
            <div className="appointment-content">
            <div className="title-area mb-25 text-center text-lg-start wow fadeInLeft">
                <span className="sub-title">
                Make An Appointment
                <img src="assets/img/theme-img/title_right.svg" alt="" />
                </span>
                <h2 className="sec-title">Relax Anytime Any Day At 20% Discount</h2>
            </div>
            <div className="appointment-form wow fadeInUp">
                <div className="row">
                <div className="form-group col-md-6">
                    <i className="fa-light fa-user" />{" "}
                    <InputText
                        type='text'
                        placeholder="First Name"
                        className="form-control"
                        name='first_name'
                    />
                </div>
                <div className="form-group col-md-6">
                    <i className="fa-light fa-user" />{" "}
                    <InputText
                        type='text'
                        placeholder="Last Name"
                        className="form-control"
                        name='last_name'
                    />
                    
                </div>
                <div className="form-group col-md-6">
                    <i className="fa-light fa-envelope" />{" "}
                    <InputText
                        type='email'
                        placeholder="Email"
                        className="form-control"
                        name='email'
                    />
                   
                </div>
                <div className="col-md-6 form-group">
                    <i className="fa-light fa-phone" />{" "}
                    <InputText
                        type='text'
                        placeholder="Phone"
                        className="form-control"
                        name='mobile'
                    />
                   
                </div>
                <div className="form-group col-12">
                    <i className="fa-regular fa-tag" />{" "}
                    <SelectInput/>
                    
                </div>
                <div className="form-group col-12">
                    {/* <input
                    type="text"
                    className="date-pick form-control"
                    name="date"
                    id="date-pick"
                    placeholder="Select Date"
                    />{" "} */}
                    <input
                        selected={startDate}
                        onClick={(date) => setStartDate(date)}
                        // minDate={subDays(new Date(), 5)}
                        placeholder="Select Date"
                        className="date-pick form-control"
                        name="date"
                    />

                    <i className="fa-light fa-calendar-days" />
                </div>
                <div className="form-group col-12">
                    <input
                    type="text"
                    className="time-pick form-control"
                    name="time"
                    id="time-pick"
                    placeholder="Select Time"
                    />{" "}
                    <i className="fa-light fa-clock" />
                </div>
                <div className="btn-group justify-content-center justify-content-lg-start">
                    <button className="th-btn">
                    Make An Appointment{" "}
                    <i className="fa-solid fa-arrow-right ms-2" />
                    </button>
                </div>
                </div>
            </div>
            <div className="appointment-video">
                <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="video-play-btn play-btn popup-video"
                >
                <i className="fa-sharp fa-solid fa-play" />
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>

  )
}

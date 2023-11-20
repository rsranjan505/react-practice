import React from 'react'

export default function ServiceItem(props) {
  return (
        <>
            <div className="service-box wow fadeInUp" style={{
                marginRight:'6px'
            }}>
                <div className="service-box_icon">
                    <div className="global-icon">
                    <img src={props.serimg} alt="Icon" />
                    </div>
                </div>
                <h3 className="box-title">
                    <a href="service-details.html">{props.title}</a>
                </h3>
                <p className="service-box_text">
                {props.description}
                </p>
            </div>
        </>
        
   
  )
}

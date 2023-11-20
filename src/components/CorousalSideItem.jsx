import React from 'react'

export default function CorousalSideItem(props) {
  return (
    <div
        className="th-hero-img"
        data-ani="slideinup"
        interval="0.2s"
        >
        <img src={props.bgimg} alt="" />
        <div
            className="th-hero-shape"
            data-ani="slideinright"
            interval="0.4s"
        />
        <div
            className="th-hero-shape2"
            data-ani="slideinright"
            interval="0.7s"
        />
    </div>
  )
}

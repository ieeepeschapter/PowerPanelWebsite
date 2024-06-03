import React from 'react'
import "./UpcomgEvents.css";


const UpcomingEventsComponent = () => {
  return (
    <div><div className="event_card my-3">
    <div className="card__header ">
      <img
        src="https://ieeentc.github.io/Events/96706b2d1d420e0290e8ace196fcd909.jpg"
        alt="card__image"
        className="card__image"
        width="600"
      />
    </div>
    <div className="card__body">
      <h4>
        Optical Fiber-based Plasmonic Sensors for Microorganism
        Detection
      </h4>
      <p>
        Event is organized by IEEE Nanotechnology Council
        Student Chapter, Indian Institute of Technology, Patna
        on 6th August 2021, 4:00 PM (IST)
      </p>
    </div>
    <div className="card__footer">
      <a href="/">
        <div className="button-center">
          <div className="readmore">
            Register Now
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </div></div>
  )
}

export default UpcomingEventsComponent
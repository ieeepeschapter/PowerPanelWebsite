import React from 'react'
import "./UpcomgEvents.css";


const UpcomingEventsComponent = () => {
  return (
    <div><div class="card my-3">
    <div class="card__header ">
      <img
        src="https://ieeentc.github.io/Events/96706b2d1d420e0290e8ace196fcd909.jpg"
        alt="card__image"
        class="card__image"
        width="600"
      />
    </div>
    <div class="card__body">
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
    <div class="card__footer">
      <a href="/">
        <div class="button-center">
          <div class="readmore">
            Register Now{" "}
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </div></div>
  )
}

export default UpcomingEventsComponent
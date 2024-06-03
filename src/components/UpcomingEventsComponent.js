import React from 'react'
import "./UpcomgEvents.css";


const UpcomingEventsComponent = ({event}) => {
  return (
    <div><div className="event_card my-3">
    <div className="card__header ">
      <img
        src={`/assets/${event.image}`}
        alt="card__image"
        className="card__image"
        width="600"
      />
    </div>
    <div className="card__body">
      <h4>
        {event.title}
      </h4>
      <p>
        {event.description}
      </p>
    </div>
    <div className="card__footer">
      <a href={event.registrationLink} target='blank'>
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
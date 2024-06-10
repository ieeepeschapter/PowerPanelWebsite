import React from "react";
import "./UpcomgEvents.css";
import { useNavigate } from "react-router-dom";

const UpcomingEventsComponent = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    const eventId = event.id; // Assuming event has an id property
    navigate(`/detailedEventsPage?id=${eventId}`); // Redirect to the specified link
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="event_card my-3">
        <div className="card__header ">
          <img
            src={`/assets/events/${event.poster}`}
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <h4>{event.title}</h4>
          <p>{event.description}</p>
        </div>
        <div className="card__footer">
          <a href={event.registrationLink} target="blank">
            <div className="button-center">
              <div className="readmore">
                Register Now
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsComponent;

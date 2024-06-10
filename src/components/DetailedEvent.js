import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import eventsData from "../data/raw/events.json";
import DisplayDateCalender from "./Utils/DisplayDateCalender";
import { Link } from "react-router-dom";

const DetailedEvent = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const event = eventsData.events.find((event) => event.id === id);
  if (!event) {
    return <div>Event not found</div>;
  }

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  const checkRegisterNowVisibility = (date) => {
    const today = new Date();
    return parseDate(date) >= today;
  };

  return (
    <div className="mx-3 my-3">
      <h1 style={{ color: "rgb(41, 74, 112)" }}>{event.title}</h1>

      <h5>{`Organized by the ${event.organizedByOrganization}`}</h5>

      <div className="row">
        <div className="col-md-9 order-2 order-md-1">
          {event.detailedTopDescription.map((desc) => (
            <p className="my-2" style={{ color: "rgb(102, 102, 102)" }}>
              {desc}
            </p>
          ))}
          <div
            style={{ display: "flex", flexWrap: "wrap", maxWidth: "100%" }}
            className="my-2"
          >
            {event.images.map((image, idx) => (
              <EventImages
                title={event.title}
                image={image}
                caption={
                  idx < event.imagesCaption.length
                    ? event.imagesCaption[idx]
                    : ""
                }
              />
            ))}
          </div>

          {event.detailedBottomDescription.map((desc) => (
            <p className="my-2" style={{ color: "rgb(102, 102, 102)" }}>
              {desc}
            </p>
          ))}

          <p
            className="fs-5 mt-4"
            style={{ color: "rgb(102, 102, 102)", margin: "0px" }}
          >
            <b className="m-0 p-0"> {event.organizerPersons} </b>
          </p>
          <p className="fs-6 mb-5" style={{ color: "rgb(102, 102, 102)" }}>
            {event.organizersPositions}
          </p>
        </div>

        <div className="col-md-3 order-1 order-md-2">
          <div className="m-2">
            <DisplayDateCalender date={event.date} />
            {checkRegisterNowVisibility(event.date) && (
              <Link
                className="btn btn-danger mt-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
                to={event.registrationLink}
                target="blank"
              >
                Register Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventImages = ({ title, image, caption }) => {
  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState("100%");

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="mx-2 ">
      <img
        ref={imgRef}
        src={`./assets/events/${image}`}
        style={{
          width: "auto",
          maxWidth: "100%",
          maxHeight: "320px",
          height: "auto",
          //   objectFit:"contain"
        }}
        alt={title}
        onLoad={handleImageLoad}
      />
      <p
        style={{
          color: "rgb(102, 102, 102)",
          width: imgWidth,
          wordWrap: "break-word",
          marginTop: "10px",
        }}
      >
        {caption}
      </p>
    </div>
  );
};

export default DetailedEvent;

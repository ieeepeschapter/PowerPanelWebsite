import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./UpcomgEvents.css";
import UpcomingEventsComponent from "./UpcomingEventsComponent";
import TwoLabelHeader from "./Utils/TwoLabelHeader";
import { useEffect, useState } from "react";
import { sortAndSeparateEvents } from "../data/utils/EventsSorted";
import data from "../data/raw/events.json";

const Events = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const headerStyle = {
    fontWeight: 700,
    fontSize: "45px",
    textAlign: "center",
  };

  useEffect(() => {
    const sortedEvents = sortAndSeparateEvents(data.events);
    setPastEvents(sortedEvents.pastEvents);
    setUpcomingEvents(sortedEvents.upcomingEvents);
    return () => {};
  }, []);

  return (
    // Upcoming Events Starts here

    <div>
      <div className="blog-home2 pb-5 pt-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="mt-3">
                <TwoLabelHeader first={"Upcoming"} second={"Events"} />
              </div>
            </div>
          </div>
          <section className="cards-section">
            <div className="row mt-2">
              {upcomingEvents.map((item) => (
                <div className="col-md-6 ">
                  <UpcomingEventsComponent event={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* // Past Events Header Starts here */}
      <div className="blog-home2 ">
        <div className="my-4 row text-center">
          <TwoLabelHeader first={"Past"} second={"Events"} />
        </div>
        {/* // Past Events Header ends here */}

        {/* // Past Events Starts here */}
        <VerticalTimeline lineColor={"#cecece"}>
          {pastEvents.map((event) => (
            <VerticalTimelineElement
              //   className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(270deg, rgb(252, 115, 60), rgb(252, 176, 76))",
                color: "#000",
                padding: "4px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(252, 115, 60)",
              }}
              date={event.date}
              iconStyle={{
                background:
                  "linear-gradient(270deg, rgb(252, 115, 60), rgb(252, 176, 76))",
              }}
            >
              <img
                src={`/assets/events/${event.image}`}
                alt=""
                // className="col-md-12 p-0 m-0"
                className="card-img-top"
              ></img>
            </VerticalTimelineElement>
          ))}
          
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Events;

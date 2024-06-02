import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./UpcomgEvents.css";
import UpcomingEventsComponent from "./UpcomingEventsComponent";

const Events = () => {
  const pastEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const upcomingEvents = [1, 2, 3];

  const headerStyle = {
    fontWeight: 700,
    fontSize: "45px",
    textAlign: "center",
  };

  return (
    // Upcoming Events Starts here

    <div>
      <div class="blog-home2 pb-5 pt-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h3 class="mt-3">Upcoming Events</h3>
            </div>
          </div>
          <section class="cards-section">
            <div class="row mt-2">
              {upcomingEvents.map((item) => (
                <div className="col-md-6 ">
                  <UpcomingEventsComponent />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* // Past Events Starts here */}
      <div className="blog-home2 ">
        <h3 class="my-4 row justify-content-center">Past Events</h3>
        <VerticalTimeline lineColor={"#cecece"}>
          {pastEvents.map((item) => (
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
              date="May 23 2023"
              iconStyle={{
                background:
                  "linear-gradient(270deg, rgb(252, 115, 60), rgb(252, 176, 76))",
              }}
            >
              <img
                src="https://ieeentc.github.io/Events/96706b2d1d420e0290e8ace196fcd909.jpg"
                alt=""
                // className="col-md-12 p-0 m-0"
                class="card-img-top"
              ></img>
            </VerticalTimelineElement>
          ))}
          {/* <VerticalTimelineElement
            //   className="vertical-timeline-element--work"
            iconStyle={{ background: "linear-gradient(270deg, rgb(252, 115, 60), rgb(252, 176, 76))" }}
            // icon={<WorkIcon />}
          ></VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Events;

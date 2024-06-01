import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./UpcomgEvents.css";

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
              <h3 class="my-3">Upcoming Events</h3>
            </div>
          </div>
          <div class="row mt-4">
            {upcomingEvents.map((item) => (
              <div class="col-md-6 on-hover">
                <div class="card border-0 mb-4">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://ieeentc.github.io/Events/96706b2d1d420e0290e8ace196fcd909.jpg"
                      alt="wrappixel kit"
                    ></img>
                  </a>
                  <div class="date-pos bg-info-gradiant p-3 m-1 d-inline-block text-center rounded text-white position-absolute">
                    Oct<span class="d-block">23</span>
                  </div>
                  <h5 class="font-weight-medium mt-3">
                    <a href="#" class="text-decoration-none link">
                      Optical Fiber-based Plasmonic Sensors for Microorganisms
                      Detection
                    </a>
                  </h5>

                  <a
                    href="#"
                    class="text-decoration-none linking text-themecolor mt-2"
                  >
                    Register Here
                  </a>
                </div>
              </div>
            ))}
          </div>
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

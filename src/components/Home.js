import React from "react";
import HomeSlider from "./HomePage/HomeSlider";
import HomeIntro from "./HomePage/HomeIntro";
import HomeAbout from "./HomePage/HomeAbout";
import HomeUpcomingEvents from "./HomePage/HomeUpcomingEvents";

const Home = () => {
  return (
    <div>
      <HomeSlider />

      <HomeIntro />

      <HomeAbout />

      <HomeUpcomingEvents />
    </div>
  );
};

export default Home;

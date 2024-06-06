import React from "react";
import HomeSlider from "./HomePage/HomeSlider";
import HomeIntro from "./HomePage/HomeIntro";
import HomeAbout from "./HomePage/HomeAbout";
import HomeUpcomingEvents from "./HomePage/HomeUpcomingEvents";

import homeData from "../data/raw/home.json"

const Home = () => {
  return (
    <div>
      <HomeSlider sliders={homeData.homeSlider} />

      <HomeIntro chapterDetails = {homeData.chapterDetails} />

      <HomeAbout chapterDetails = {homeData.chapterDetails} />

      <HomeUpcomingEvents />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

const HomeSlider = ({ sliders }) => {
  const [homeSliders, setHomeSliders] = useState([]);

  useEffect(() => {
    setHomeSliders(sliders);
  }, []);

  return (
    <div>
      {/* Slider Carousel starts */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {homeSliders.map((slider, idx) => (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : ""}
              aria-label={`Slide ${idx}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {homeSliders.map((slider, idx) => (
            <div
              className={idx === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img
                src={`./assets/${slider.image}`}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Slider Carousel ends */}
    </div>
  );
};

export default HomeSlider;

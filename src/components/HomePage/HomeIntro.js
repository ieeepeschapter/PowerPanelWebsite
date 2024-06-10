import React from "react";

const HomeIntro = ({ chapterDetails }) => {
  return (
    <div
      className="card container my-4"
      style={{
        background: "linear-gradient(to right, #f7faf8, #fafafa)",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div className="row px-2 py-4">
        <img
          className="col-md-3"
          src={`./assets/home/${chapterDetails.logo}`}
          style={{objectFit:"contain"}}
        />

        <div
          className="col-md-6 my-3"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{chapterDetails.chapterName}</h3>
          <h4>Indian Institute of Technology Patna</h4>
        </div>

        <img
          src={`./assets/home/${chapterDetails.introRightLogo}`}
          className="col-md-3"
          style={{objectFit:"contain"}}
        ></img>
      </div>
    </div>
  );
};

export default HomeIntro;

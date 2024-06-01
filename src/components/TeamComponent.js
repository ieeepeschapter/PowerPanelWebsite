import React, { useState } from "react";

const TeamComponent = () => {
  const [isHoveredCoreTeam, setIsHoveredCoreTeam] = useState(false);

  const singlePersonStyle = {
    marginTop: "30px",
    padding: "30px",
    backgroundColor: "#f6f9ff",
    borderRadius: "5px",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.4)",
  };
  const singlePersonHoveredStyle = {
    marginTop: "30px",
    padding: "30px",
    background: "linear-gradient(to right, #f5420c, #fd784c)",
    borderRadius: "5px",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.4)",
  };

  const personImageDivStyle = {
    position: "relative",
    marginBottom: "50px",
    borderRadius: "50%",
    border: "4px dashed transparent",
    transition: "padding 0.3s",
    paddingTop: "10px",
    paddingBottom: "10px",
  };

  const personImageHoveredDivStyle = {
    position: "relative",
    marginBottom: "50px",
    borderRadius: "50%",
    border: "dashed white",
    transition: "padding 0.3s",
    paddingTop: "10px",
    paddingBottom: "10px",
    // padding:"10px"
  };

  const personImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // border: "5px solid white",
    borderRadius: "50%",
  };

  const personImageHoveredStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // border: "5px solid white",
    borderRadius: "50%",
  };

  const fullnameStyle = {
    marginBottom: "10px",
    fontSize: "28px",
    fontWeight: 700,
    color: isHoveredCoreTeam ? "#fff" : "#000",
  };

  const specialityStyle = {
    textTransform: "uppercase",
    fontSize: "14px",
    color: isHoveredCoreTeam ? "#fff" : "#016cec",
  };

  const iconStyle = {
    fontSize: "20px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
    display: "inline-block",
    width: "60px",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    background: "linear-gradient(to right, #092fd8, #598ef0)",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "24px",
  };

  const iconHoveredStyle = {
    fontSize: "20px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
    display: "inline-block",
    width: "60px",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    background: "none",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "24px",
    backgroundColor: "#fff",
    color: "#016cec",
  };


  const handleCoreTeamMouseEnter = () => {
    setIsHoveredCoreTeam(true);
    console.log("Entered mouse");
  };

  const handleCoreTeamMouseLeave = () => {
    setIsHoveredCoreTeam(false);
    console.log("Exited mouse");
  };
  return (
    <div
      onMouseEnter={handleCoreTeamMouseEnter}
      onMouseLeave={handleCoreTeamMouseLeave}
      style={isHoveredCoreTeam ? {cursor:"pointer"} : {cursor:"auto"}}
    >
      <div
        class=""
        style={isHoveredCoreTeam ? singlePersonHoveredStyle : singlePersonStyle}
      >
        <div
          class="row"
          style={
            isHoveredCoreTeam ? personImageHoveredDivStyle : personImageDivStyle
          }
        >
          <img
            src="https://girlscript-asansol.netlify.app/Assets/team/debdeep.jpeg"
            style={
              isHoveredCoreTeam ? personImageHoveredStyle : personImageStyle
            }
            alt=""
            className="col-lg-6 col-xl-6 col-md-6"
          ></img>
          <span
            class=""
            style={isHoveredCoreTeam ? iconHoveredStyle : iconStyle}
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
        </div>
        <div class="">
          <h3 class="" style={fullnameStyle}>
            Soumali Gorai
          </h3>
          <span class="" style={specialityStyle}>
            Chapter Lead
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;

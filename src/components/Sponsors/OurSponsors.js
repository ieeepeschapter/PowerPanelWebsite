import React from "react";
import TwoLabelHeader from "../Utils/TwoLabelHeader";

const OurSponsors = ({ ourSponsors }) => {
  return (
    <>
      <h2 className=" mb-3 mt-5 text-center">
        <TwoLabelHeader first={"Our"} second={"Sponsor"} />
      </h2>
      <div className="">
        <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
          {ourSponsors.map((sponsor) => (
            <>
              <a className="" key={sponsor} href={sponsor.link} target="blank">
                <img
                  src={`/assets/${sponsor.image}`}
                  alt={sponsor.name}
                  className="m-2"
                  style={{ height: "60px", width: "auto" }}
                />
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurSponsors;

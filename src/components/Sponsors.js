import React, { useEffect, useState } from "react";
import TwoLabelHeader from "./Utils/TwoLabelHeader";
import DisplaySponsorsTable from "./Sponsors/DisplaySponsorsTable";
import OurSponsors from "./Sponsors/OurSponsors";

import sponsorsDetails from "../data/raw/sponsors.json";

const Sponsors = () => {
  const [ourSponsors, setOurSponsors] = useState([]);
  const [sponsorshipLevel, setSponsorshipLevel] = useState([]);

  useEffect(() => {
    setOurSponsors(sponsorsDetails.ourSponsors);
    setSponsorshipLevel(sponsorsDetails.sponsorLevels);
  }, []);

  return (
    <div
      className="container"
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DisplaySponsorsTable sponsorshipLevel={sponsorshipLevel} />

      <OurSponsors ourSponsors={ourSponsors} />

      <h2 className="mt-5 mb-3 text-center">
        <TwoLabelHeader first={"Become a"} second={"Sponsor"} />
      </h2>

      <h5 className="d-flex justify-content-center">
        Contact: &nbsp;
        <span>
          <a href={`mailto:${sponsorsDetails.sponsorEmail}`}>
            {sponsorsDetails.sponsorEmail}
          </a>
        </span>
      </h5>
    </div>
  );
};

export default Sponsors;
